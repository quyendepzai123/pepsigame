import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import LoginOTP from "../screens/LoginOTP";
import Game from "../screens/Game";
import Congratulation from "../screens/Congratulation";
import MyGift from "../screens/MyGift";
import Scan from "../screens/Scan";
import RegisterOTP from "../screens/RegisterOTP";
import Collection from "../screens/Collection";
import Rules from "../screens/Rules";
import Intrust from "../screens/Intrust";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Intrust" component={Intrust} />
      <Stack.Screen name="Rules" component={Rules} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RegisterOTP" component={RegisterOTP} />
      <Stack.Screen name="LoginOTP" component={LoginOTP} />
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Congratulation" component={Congratulation} />
      <Stack.Screen name="MyGift" component={MyGift} />
      <Stack.Screen name="Scan" component={Scan} />
      <Stack.Screen name="Collection" component={Collection} />
    </Stack.Navigator>
  );
};

export default AppStack;
