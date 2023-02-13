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
import TitleBack from "../../components/TitleBack";
const Game = () => {
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
        <View
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
            }}
          >
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
                right: 0,
                top: 0,
              }}
              source={require("../../assets/images/imageHome/topright.png")}
            />
          </View>

          <Image
            style={{
              position: "absolute",
              left: 7,
              top: 485,
            }}
            source={require("../../assets/images/Game/flowerLeft.png")}
          />

          <Image
            style={{
              position: "absolute",
              right: 0,
              top: 153,
            }}
            source={require("../../assets/images/Game/flowerTopRight.png")}
          />
          <Image
            style={{
              position: "absolute",
              right: 0,
              top: 570,
            }}
            source={require("../../assets/images/Game/flowerBottomRIght.png")}
          />
          <Image
            style={{
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
            source={require("../../assets/images/Game/bottom.png")}
          />
        </View>
        <TitleBack
          onPressBack={() => alert("back ne")}
          onPressLogout={() => alert("log out ne")}
          title="3"
        />

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={{
              marginLeft: 11,
              width: "100%",
              height: 560,
            }}
            source={require("../../assets/images/Game/lonNuocs.png")}
          />
          <Image
            style={
              {
                marginTop: -50,
              }
            }
            source={require("../../assets/images/Game/ButtonTruot.png")}
          />
          <Image
            style={
              {
                // marginTop: 10,
              }
            }
            source={require("../../assets/images/imageHome/dauLan.png")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Game;

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
});
