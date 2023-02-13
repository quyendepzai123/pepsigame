import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";

const ButtonPlayNow = (props) => {
  const { style, onPress, title, timePlay } = props;
  return (
    <Pressable style={[styles.container, style]} onPress={() => onPress()}>
      <Image
        style={{ position: "absolute", bottom: 0, left: 0 }}
        source={require("../../assets/images/ButtonPlayNow/flowerLeft.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 0, right: 0 }}
        source={require("../../assets/images/ButtonPlayNow/flowerRight.png")}
      />
      <Image
        style={{ position: "absolute", bottom: 0, right: 0 }}
        source={require("../../assets/images/ButtonPlayNow/point.png")}
      />
      <Image
        style={{ position: "absolute" }}
        source={require("../../assets/images/ButtonPlayNow/square.png")}
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "#FFFFFF" }}>
        {title}
      </Text>
      <Text style={{ fontSize: 12, fontWeight: "bold", color: "#FFFFFF" }}>
        Bạn có tổng cộng
        <Text style={{ fontSize: 16, color: "#FFDD00" }}> {timePlay}</Text> lượt
        chơi
      </Text>
    </Pressable>
  );
};

export default ButtonPlayNow;

const styles = StyleSheet.create({
  container: {
    width: 220,
    height: 60,
    backgroundColor: "#D02027",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
