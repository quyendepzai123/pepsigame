import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonPlayNow from "../../components/ButtonPlayNow";
import ButtonTimePlay from "../../components/ButtonTimePlay";
import ButtonClose from "../../components/ButtonClose";
import ButtonLogout from "../../components/ButtonLogout";
const Home = () => {
  const [agree, setAgree] = useState(false);
  const [sdt, setSdt] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (sdt.length === 10) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agree, sdt]);

  return (
    <View style={styles.container}>
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
            colors={["#FCD54E", "#FDEA95", "#FBD239"]}
            start={{
              x: 71.25,
              y: 138.5,
            }}
            end={{
              x: 213.75,
              y: 138.5,
            }}
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
                right: 0,
                top: 65,
              }}
              source={require("../../assets/images/modalSelectPlay/right.png")}
            />
            <View style={{ width: "100%", alignItems: "flex-end" }}>
              <ButtonClose onPress={() => setModalVisible(!modalVisible)} />
            </View>

            <Text style={styles.modalText}>
              BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?
            </Text>
            <ButtonTimePlay
              title="Lượt chơi miễn phí"
              timePlay="0"
              onPress={() => alert("chịu")}
            />
            <ButtonTimePlay
              title="Lượt chơi quy đổi"
              timePlay="5"
              onPress={() => alert("chịu")}
            />
          </LinearGradient>
          {/* </View> */}
        </View>
      </Modal>
      <LinearGradient
        colors={["#02A7F0", "#0063A7"]}
        start={{
          x: 64 / 100,
          y: 64 / 100,
        }}
        end={{
          x: 0.5,
          y: 0.5,
        }}
        style={styles.box}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
            source={require("../../assets/images/imageHome/topleft.png")}
          />
          <Image
            style={{
              position: "absolute",
              left: 88,
              top: 0,
            }}
            source={require("../../assets/images/imageHome/topleft2.png")}
          />
          <Image
            style={{
              position: "absolute",
              right: 0,
              top: 0,
            }}
            source={require("../../assets/images/imageHome/topright.png")}
          />
        </View>

        <Image
          style={{
            position: "absolute",
            left: 90,
            top: 75,
          }}
          source={require("../../assets/images/imageHome/flowerYellow.png")}
        />
        <Image
          style={{
            position: "absolute",
            left: 192,
            top: 6,
          }}
          source={require("../../assets/images/imageHome/flowerBlue.png")}
        />
        <Image
          style={{
            position: "absolute",
            right: 0,
            top: 110,
          }}
          source={require("../../assets/images/imageHome/boxSquare.png")}
        />
        <ButtonLogout onPressLogout={() => alert("log out ne")} />

        <View style={{ alignItems: "center", marginTop: 90 }}>
          <Image
            style={
              {
                // marginTop: 10,
              }
            }
            source={require("../../assets/images/imageHome/dauLan.png")}
          />
        </View>

        <Image
          style={{
            position: "absolute",
            left: 0,
            top: 385,
          }}
          source={require("../../assets/images/imageHome/midLeft.png")}
        />
        <Image
          style={{
            position: "absolute",
            left: 0,
            top: 500,
          }}
          source={require("../../assets/images/imageHome/flowerAbove.png")}
        />
        <Image
          style={{
            position: "absolute",
            left: 2,
            top: 380,
          }}
          source={require("../../assets/images/imageHome/flowerBelow.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: -2,
            top: 386,
          }}
          source={require("../../assets/images/imageHome/midRight.png")}
        />

        <View
          style={{
            width: "100%",
            height: 500,
            position: "absolute",
            bottom: 0,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              position: "absolute",
              width: "100%",
              left: 0,
              bottom: 0,
            }}
            source={require("../../assets/images/imageHome/bottom.png")}
          />
          <Image
            style={{
              position: "absolute",
              // width: '100%',
              // left: 20,
              bottom: 0,
            }}
            source={require("../../assets/images/imageHome/caiTrong.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginVertical: 8,
              color: "#FFDD00",
            }}
          >
            Hướng dẫn
          </Text>

          <ButtonPlayNow
            style={{ marginBottom: 10 }}
            title="Chơi ngay"
            onPress={() => setModalVisible(true)}
            timePlay="8"
          />

          <ButtonWhite
            style={{ backgroundColor: "#fff", marginVertical: 10 }}
            title="Quét mã"
            onPress={() => alert("Quyen ne")}
          />
          <ButtonWhite
            style={{ backgroundColor: "#fff", marginVertical: 10 }}
            title="Bộ sưu tập"
            onPress={() => alert("Quyen ne")}
          />
          <ButtonWhite
            style={{ backgroundColor: "#fff", marginVertical: 10 }}
            title="Chi tiết quà tặng"
            onPress={() => alert("Quyen ne")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  box: {
    width: "100%",
    height: "100%",
    // backgroundColor: radial-gradient(60.04% 60.04% at 50% 50%, #02A7F0 0%, #0063A7 100%);
  },
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
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    width: "80%",
    marginBottom: 15,
    textAlign: "center",
    color: "#D02027",
    fontSize: 22,
    fontWeight: "bold",
  },
});
