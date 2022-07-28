import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";

import {ServiceAccount} from "firebase-admin";


// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount: ServiceAccount = require("./serviceAccountKey.json");

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

export const helloWorld = functions.https.onRequest((request, response) => {
  response.json({
    message: "Hello from Firebase!",
  });
});

export const getGOTY = functions.https.onRequest(async (request, response) => {
  const gotyRef = db.collection("goty");
  const docsSnap = await gotyRef.get();
  const docs = docsSnap.docs.map((doc) => doc.data());

  response.json(docs);
});


// Express
const app = express();
app.use(cors({origin: true}));

app.get("/goty", async (req, res) =>{
  const gotyRef = db.collection("goty");
  const docsSnap = await gotyRef.get();
  const docs = docsSnap.docs.map((doc) => doc.data());

  res.json(docs);
});

app.post("/goty/:id", async (req, res) =>{
  const id = req.params.id;
  const gotyRef = db.collection("goty").doc(id);
  const gameSnap = await gotyRef.get();

  if (!gameSnap.exists) {
    res.status(404).json({
      ok: false,
      message: "Game with id " + id + " doesn't exist.",
    });
  } else {
    const before = gameSnap.data() || {votes: 0, name: ""};
    await gotyRef.update({
      votes: before.votes + 1,
    });

    res.json({
      ok: true,
      message: `Thanks for voting for ${before.name}.`,
    });
  }
});

export const api = functions.https.onRequest( app );
