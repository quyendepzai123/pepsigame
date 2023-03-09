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
import {
  getDatabase,
  ref,
  set,
  child,
  push,
  update,
  get,
  onValue,
} from "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import { database, firebase } from "./config";
import AuthAPI from "./src/modules/api/authAPI.";
var db = firebase.firestore();

export default function App() {
  const [email, setEmail] = useState("quyentran124@gmail.com");
  const [name, setName] = useState("quyentran");
  const [id, setId] = useState(1);

  useEffect(() => {
    // db.collection("users")
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       console.log("-", doc.data().password, "-", doc.data().name);
    //     });
    //   });
    // createUser();
    // getData();
    // getUser();
    // createProduct();
  }, []);

  const createUser = () => {
    try {
      AuthAPI.createUser('Trần Quyền', '0834196884');
      console.log("create user successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = () => {
    try {
      AuthAPI.createProduct();
      console.log("create product successfully");
    } catch (error) {
      console.log(error);
    }
  };


  function getData() {
    const starCountRef = ref(database, "users/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          name: childData.name,
          phone: childData.phone,
        });
      });
      console.log(
        array.map((item) => {
          return item.id;
        })
      );
    });
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
