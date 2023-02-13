import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ButtonClose = (props) => {
  const { style, onPress, title, timePlay } = props;
  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress()}>
      <Image
        style={{}}
        source={require("../../assets/images/iconClose.png")}
      />
    </Pressable>
  );
};

export default ButtonClose;

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    backgroundColor: "#D02027",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
