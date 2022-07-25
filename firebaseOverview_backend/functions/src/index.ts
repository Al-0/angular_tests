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

export const api = functions.https.onRequest( app );
