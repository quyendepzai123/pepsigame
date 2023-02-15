import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ButtonScan = (props) => {
  const { style, onPress, title, timePlay, source } = props;
  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress()}>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonScan;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 60,
    backgroundColor: "#D02027",
    borderWidth: 5,
    borderColor: '#FBC926',
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
    marginBottom: 10,
  },
});
