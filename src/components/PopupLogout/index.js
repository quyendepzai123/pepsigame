import { View, Text, Modal, Alert, StyleSheet, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonClose from "../ButtonClose";
import ButtonScan from "../ButtonScan";
import ButtonWhite from "../ButtonWhite";

const PopupLogout = (props) => {
  const { visible, onPressClose, onPressLogout } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={{ width: "100%" }}>
        <LinearGradient
          colors={["#FFD76C", "#F2CD6C", "#EEAD00"]}
          style={styles.modalView}
        >
          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
            source={require("../../assets/images/modalSelectPlay/left.png")}
          />
          <Image
            style={{
              position: "absolute",
              right: -65,
              top: 150,
            }}
            source={require("../../assets/images/imageHome/midLeft.png")}
          />

          <Image
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
            }}
            source={require("../../assets/images/imageHome/popupvectorbot.png")}
          />
          <View style={{ width: "100%", alignItems: "flex-end" }}>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                color: "#005082",
                textAlign: "center",
                width: 200,
              }}
            >
              Bạn có chắc chắn muốn{" "}
              <Text style={{ fontWeight: "bold" }}>đăng xuất</Text> không?
            </Text>
          </View>

          <ButtonScan
            style={{ width: 150, height: 50, marginTop: 16 }}
            title="Đăng xuất"
            onPress={() => onPressLogout()}
          />

          <ButtonWhite
            style={{ width: 140, height: 40, backgroundColor: "#FFF" }}
            title="Hủy"
            onPress={() => onPressClose()}
          />
        </LinearGradient>
      </View>
    </Modal>
  );
};

export default PopupLogout;

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
