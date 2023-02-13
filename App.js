import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import RegisterOTP from './src/screens/RegisterOTP';
import Game from './src/screens/Game';
import Congratulation from './src/screens/Congratulation';



export default function App() {
  return (
    <View style={styles.container}>
      <Congratulation />
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="inverted" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
