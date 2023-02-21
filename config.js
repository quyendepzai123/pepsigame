import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDvJO2zs_AYp0JV3jIjYQO3b_vYzDfTYjs",
  authDomain: "pepsigame-80f12.firebaseapp.com",
  projectId: "pepsigame-80f12",
  storageBucket: "pepsigame-80f12.appspot.com",
  messagingSenderId: "699627998197",
  appId: "1:699627998197:web:0139b8bc73bc66d5996ebc",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

