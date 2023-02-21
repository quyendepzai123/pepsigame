import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';
import LoginOTP from '../screens/LoginOTP';

const Stack = createNativeStackNavigator();


const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='LoginOTP' component={LoginOTP} />
    </Stack.Navigator>
  )
}

export default AppStack;