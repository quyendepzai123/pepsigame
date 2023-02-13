import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const index = (props) => {
  const { style, onPress, title } = props;
  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress()}>
      <Image style={{ position: 'absolute', bottom: 0, left: 0}} 
      source={require('../../assets/images/ButtonGrays/left.png')}/>
      <Image style={{ position: 'absolute', bottom: 0, right: 0}} 
      source={require('../../assets/images/ButtonGrays/right.png')}/>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 44,
    backgroundColor: "#9E9E9E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
