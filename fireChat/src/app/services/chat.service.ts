import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Message } from '../interfaces/message.interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  public chats: Message[] = [];
  public user: any = {};
  private itemsCollection!: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user =>{

      if (!user) return;

      this.user.name = user.displayName;
      this.user.uid = user.uid;
    })
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', (ref) =>
      ref.orderBy('date', 'desc').limit(5)
    );
    return this.itemsCollection.valueChanges().pipe(
      map((messages: Message[]) => {
        this.chats = [];

        messages.forEach((message) => {
          this.chats.unshift(message);
        });

        return this.chats;
      })
    );
  }

  addMessage(text: string) {
    let message: Message = {
      uid: this.user.uid,
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
    };

    return this.itemsCollection.add(message);
  }

  loginWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginWithTwitter() {
    this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  logout() {
    this.user = {};
    this.auth.signOut();
  }
}
