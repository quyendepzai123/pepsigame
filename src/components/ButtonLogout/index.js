import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const ButtonLogout = (props) => {
  const {  onPressLogout } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        marginTop: 58,
        marginRight: 20
      }}
    >
      <Pressable
        //   style={{ width: 50, height: 50, backgroundColor: "#ccc" }}
        onPress={() => onPressLogout()}
      >
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../../assets/images/iconLogout.png")}
        />
      </Pressable>
    </View>
  );
};

export default ButtonLogout;

const styles = StyleSheet.create({});
