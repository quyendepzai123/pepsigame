import { View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonRed from "../../components/ButtonRed";
import CongratulationLonNoc from "../../components/CongratulationLonNuoc";
import TitleBack from "../../components/TitleBack";
import styles from "./styles";

const Congratulation = (props) => {
  const { navigation, route } = props;

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
        <TitleBack
          enableIconBack={false}
          onPress={() => navigation.navigate("Home")}
          titleScreen=""
          enableTitleBelow={false}
          timesPlay="3"
          select={true}
          onPressLogout={() => navigation.navigate("Login")}
        />

        <View style={styles.coverImage}>
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
              bottom: 0,
            }}
            source={require("../../assets/images/imageHome/caiTrong.png")}
          />
        </View>

        <CongratulationLonNoc
          quantityCoins={route.params.coins}
          title={
            route.params.collections == "an"
              ? "1 lon Pepsi AN"
              : route.params.collections == "phuc"
              ? "1 lon Mirinda PHÚC"
              : "1 lon 7Up LỘC"
          }
          source={
            route.params.collections == "an"
              ? require("../../assets/images/Congratulation/lonPepsi.png")
              : route.params.collections == "phuc"
              ? require("../../assets/images/Congratulation/mirinda.png")
              : require("../../assets/images/Congratulation/lon7up.png")
          }
        />
        <View style={{ alignItems: "center" }}>
          <ButtonRed
            style={{ marginTop: 20 }}
            title="Xác nhận"
            onPress={() =>
              navigation.navigate("Home", { item: route.params.item })
            }
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Congratulation;
