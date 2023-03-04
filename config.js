import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDvJO2zs_AYp0JV3jIjYQO3b_vYzDfTYjs",
  authDomain: "pepsigame-80f12.firebaseapp.com",
  databaseURL: "https://pepsigame-80f12-default-rtdb.firebaseio.com",
  projectId: "pepsigame-80f12",
  storageBucket: "pepsigame-80f12.appspot.com",
  messagingSenderId: "699627998197",
  appId: "1:699627998197:web:0139b8bc73bc66d5996ebc",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const database = getDatabase();

 export { firebase, database };
