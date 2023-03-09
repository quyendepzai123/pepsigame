import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useState } from "react";
import PopupLogout from "../PopupLogout";

const TitleBack = (props) => {
  const {
    enableIconBack,
    onPressBack,
    timesPlay,
    titleScreen,
    selectFree,
    enableTitleBelow,
    onPressLogout,
  } = props;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 56,
        marginBottom: 20,
        paddingHorizontal: 20,
      }}
    >
      <PopupLogout
        visible={modalVisible}
        onPressClose={() => setModalVisible(false)}
        onPressLogout={() => onPressLogout()}
      />
      {enableIconBack ? (
        <Pressable onPress={() => onPressBack()}>
          <Image
            style={{
              width: 24,
              height: 24,
            }}
            source={require("../../assets/images/iconBack.png")}
          />
        </Pressable>
      ) : (
        <View></View>
      )}

      {enableTitleBelow ? (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {titleScreen}
          </Text>
          {selectFree ? (
            <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
              Bạn còn{" "}
              <Text style={{ color: "#FFDD00", fontSize: 18 }}>
                {timesPlay}
              </Text>{" "}
              lượt chơi miễn phí
            </Text>
          ) : (
            <Text style={{ color: "#FFFFFF", fontSize: 18 }}>
              Bạn còn{" "}
              <Text style={{ color: "#FFDD00", fontSize: 18 }}>
                {timesPlay}
              </Text>{" "}
              lượt quy đổi
            </Text>
          )}
        </View>
      ) : (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 24,
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {titleScreen}
          </Text>
        </View>
      )}
      <View>
        <Pressable
          //   style={{ width: 50, height: 50, backgroundColor: "#ccc" }}
          onPress={() => setModalVisible(true)}
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
