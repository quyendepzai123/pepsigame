import { View, Text, Modal, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonScan from "../ButtonScan";

const PopupDoiQua = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        {/* <View style={styles.modalView}> */}
        <LinearGradient
          colors={["#02A7F0", "#0063A7"]}
          // start={{
          //   x: 1.1,
          //   y: -0.1,
          // }}
          // end={{
          //   x: 2.401,
          //   y: 2.401,
          // }}
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
            <ButtonClose onPress={() => setModalVisible(!modalVisible)} />
          </View>

          <Text style={styles.modalText}>BẠN ĐÃ HẾT LƯỢT!</Text>

          <Text
            style={{
              width: 220,
              color: "#FFF",
              fontSize: 16,
              textAlign: "center",
              fontWeight: "400",
            }}
          >
            Hãy scan thêm mã trên bill mua nước hoặc combo Pepsi rạp để nhận
            thêm lượt chơi
          </Text>
          <Image
            style={{ width: 120, height: 120, marginTop: 24 }}
            source={require("../../assets/images/imageHome/faceSad.png")}
          />
          <ButtonScan
            style={{}}
            title="Scan ngay"
            onPress={() => alert("chịu")}
          />
        </LinearGradient>
        {/* </View> */}
      </View>
    </Modal>
  );
};

export default PopupDoiQua;

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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    width: "80%",
    marginBottom: 4,
    textAlign: "center",
    color: "#FFDD00",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
