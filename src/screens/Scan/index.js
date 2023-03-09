import { View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonRed from "../../components/ButtonRed";
import TitleBack from "../../components/TitleBack";
import styles from "./styles";

const Scan = (props) => {
  const { navigation } = props;

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
              right: 0,
              top: 0,
            }}
            source={require("../../assets/images/vector2.png")}
          />
        </View>
        <TitleBack
          style={{ marginBottom: 40 }}
          titleScreen="Quét mã"
          enableIconBack={true}
          onPressBack={() => navigation.navigate('Home')}
          onPressLogout={() => navigation.navigate("Login")}
        />
        <Image
          style={{
            position: "absolute",
            left: -16,
            top: 180,
          }}
          source={require("../../assets/images/flower.png")}
        />
        <Image
          style={{
            position: "absolute",
            left: 0,
            top: 500,
          }}
          source={require("../../assets/images/flower.png")}
        />
        <Image
          style={{
            position: "absolute",
            right: -18,
            top: 450,
          }}
          source={require("../../assets/images/flower.png")}
        />
        <Image
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
          source={require("../../assets/images/vector3.png")}
        />
        <Image
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
          source={require("../../assets/images/vector4.png")}
        />
        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Image
            style={{
              marginTop: 46,
              marginBottom: 10,
            }}
            source={require("../../assets/images/billScan.png")}
          />
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ButtonRed title="Quét mã" onPress={() => alert("Scan")} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Scan;
