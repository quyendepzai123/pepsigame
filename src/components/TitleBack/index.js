import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

const TitleBack = (props) => {
  const { onPressBack, onPressLogout, title } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 56,
        marginHorizontal: 20
      }}
    >
      <Pressable onPress={() => onPressBack()}>
        <Image
          style={{
            width: 24,
            height: 24,
          }}
          source={require("../../assets/images/iconBack.png")}
        />
      </Pressable>

      <View
        style={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{ color: "#FFFFFF", fontSize: 24, textTransform: "uppercase" }}
        >
          VUỐT LÊN ĐỂ CHƠI
        </Text>
        <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
          Bạn còn{" "}
          <Text style={{ color: "#FFDD00", fontSize: 18 }}>{title}</Text> lượt
          chơi miễn phí
        </Text>
      </View>
      <View>
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
    </View>
  );
};

export default TitleBack;

const styles = StyleSheet.create({});
