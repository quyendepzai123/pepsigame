import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import TitleBack from "../../components/TitleBack";
import styles from "./styles";

const Intrust = (props) => {
  const { navigation, route } = props;
  const text1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat. ";
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
        <View style={{ flexDirection: "row", marginBottom: 0 }}>
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
          enableIconBack={true}
          onPressBack={() =>
            navigation.navigate("Home", { item: route.params.item })
          }
          titleScreen="Hướng dẫn"
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

        <View style={styles.coverTextDetail}>
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={{
              uri: "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678331067/image_1_mfidt4.png",
            }}
          />
          <Text
            style={{
              fontWeight: "bold",
              color: "#FFF",
              fontSize: 16,
              textAlign: "justify",
              marginVertical: 30,
              width: "70%",
            }}
          >
            Bước 1: <Text style={styles.textDetail}>{text1}</Text>
          </Text>
          <Image
            style={{
              width: 300,
              height: 300,
            }}
            source={{
              uri: "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678331081/pepsigame/image_3_aexwmo.png",
            }}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Intrust;
