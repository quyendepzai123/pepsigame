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
import "firebase/firestore";
import "firebase/auth";

export default function App() {

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
