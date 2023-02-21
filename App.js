import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import RegisterOTP from "./src/screens/RegisterOTP";
import Game from "./src/screens/Game";
import Congratulation from "./src/screens/Congratulation";
import Scan from "./src/screens/Scan";
import Collection from "./src/screens/Collection";
import MyGift from "./src/screens/MyGift";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigation/AppStack";

// import auth from '@react-native-firebase/auth';
// firebase.initializeApp({
//   apiKey: "AIzaSyDvJO2zs_AYp0JV3jIjYQO3b_vYzDfTYjs",
//   authDomain: "pepsigame-80f12.firebaseapp.com",
//   projectId: "pepsigame-80f12",
// });
// var db = firebase.firestore();

export default function App() {
  // useEffect(() => {
  //   console.log("124");
  //   db.collection("User")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         console.log("-", doc.data().email, "-", doc.data().name);
  //       });
  //     });
  // }, []);

  // const [initializing, setInitializing] = useState(true);
  // const [user, setUser] = useState();

  // // Handle user state changes
  // function onAuthStateChanged(user) {
  //   setUser(user);
  //   if (initializing) setInitializing(false);
  // }

  // useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber; // unsubscribe on unmount
  // }, []);

  // if (initializing) return null;

  // if (!user) {
    return (
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    );
  // }

  // return <Register />;
}
