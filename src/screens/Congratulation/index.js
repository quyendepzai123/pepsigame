import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonRed from "../../components/ButtonRed";
import ButtonLogout from "../../components/ButtonLogout";
import CongratulationLonNoc from "../../components/CongratulationLonNuoc";

const Congratulation = () => {
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
            source={require("../../assets/images/vector1.png")}
          />

          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 0,
            }}
            source={require("../../assets/images/Congratulation/tiaSang.png")}
          />
          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 200,
            }}
            source={require("../../assets/images/Congratulation/pointYellowLeft.png")}
          />

          <Image
            style={{
              position: "absolute",
              left: 27,
              top: 320,
            }}
            source={require("../../assets/images/imageHome/flowerYellow.png")}
          />

          <Image
            style={{
              position: "absolute",
              left: 0,
              top: 416,
            }}
            source={require("../../assets/images/Congratulation/flowerLeft.png")}
          />

          <Image
            style={{
              position: "absolute",
              width: 27,
              height: 27,
              left: 37,
              top: 496,
            }}
            source={require("../../assets/images/imageHome/flowerYellow.png")}
          />
        </View>

        <Image
          style={{
            position: "absolute",
            width: 39,
            height: 39,
            left: 36,
            top: 637,
          }}
          source={require("../../assets/images/imageHome/flowerYellow.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 0,
            top: 138,
          }}
          source={require("../../assets/images/Congratulation/flowerRightTop.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 0,
            top: 350,
          }}
          source={require("../../assets/images/Congratulation/pointSYellow.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 45,
            top: 430,
            width: 35,
            height: 35,
          }}
          source={require("../../assets/images/imageHome/flowerYellow.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 0,
            top: 480,
          }}
          source={require("../../assets/images/Congratulation/flowerRightBot.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 11,
            top: 610,
            width: 16,
            height: 16,
          }}
          source={require("../../assets/images/imageHome/flowerYellow.png")}
        />

        <Image
          style={{
            position: "absolute",
            right: 58,
            top: 686,
            width: 29,
            height: 29,
          }}
          source={require("../../assets/images/imageHome/flowerYellow.png")}
        />
        <ButtonLogout onPressLogout={() => alert("log out ne")} />

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

        <CongratulationLonNoc
          quantityCoins="100"
          title="1 lon Pepsi AN"
          source={require("../../assets/images/Congratulation/lonPepsi.png")}
        />
        <View style={{ alignItems: "center" }}>
          <ButtonRed
            style={{ marginTop: 20 }}
            title="Xác nhận"
            onPress={() => alert("Quyen ne")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Congratulation;

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
