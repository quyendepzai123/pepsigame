import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import TitleBack from "../../components/TitleBack";
import { useIsFocused } from "@react-navigation/native";
import { ref, update } from "firebase/database";
import { database } from "../../../config";
import styles from "./styles";

const Game = (props) => {
  const { navigation, route } = props;
  const [scrollEnable, setScrollEnable] = useState(true);
  const [user, setUser] = useState([]);

  const scrollViewRef = useRef();

  useEffect(() => {
    if (route.params.item != undefined) {
      setScrollEnable(true);
    } else {
      setScrollEnable(false);
    }
    setUser(route.params.item);
  }, []);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
      if (!scrollEnable) {
        navigation.navigate("Home", { item: user });
      }
    }
  }, [isFocused]);

  function upDate() {
    update(ref(database, "users/" + route.params.item.id), {
      name: "Tran Quyền",
      coins:
        randomCoin === 1
          ? route.params.item.coins + 50
          : route.params.item.coins + 100,
      collections: {
        loc:
          randomLonNuoc === 1
            ? route.params.item.collections.loc + 1
            : route.params.item.collections.loc,
        phuc:
          randomLonNuoc === 2
            ? route.params.item.collections.phuc + 1
            : route.params.item.collections.phuc,
        an:
          randomLonNuoc === 3
            ? route.params.item.collections.an + 1
            : route.params.item.collections.an,
      },
      timesFrees: route.params.timesFree
        ? route.params.item.timesFrees - 1
        : route.params.item.timesFrees,
      timesExchanges: !route.params.timesFree
        ? route.params.item.timesExchanges - 1
        : route.params.item.timesExchanges,
    })
      .then(() => {
        console.log("update data successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const randomLonNuoc = Math.floor(Math.random() * 3) + 1;
  const randomCoin = Math.floor(Math.random() * 2) + 1;

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
          enableIconBack={true}
          onPressBack={() => navigation.goBack("Home")}
          timesPlay={route.params.timesPlay}
          titleScreen="VUỐT LÊN ĐỂ CHƠI"
          enableTitleBelow={true}
          selectFree={route.params.timesFree}
          onPressLogout={() => navigation.navigate("Login")}
        />

        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Image
            style={styles.imageLonNuocDo}
            source={require("../../assets/images/Game/lonNuocs.png")}
          />
          <Image
            style={{
              marginTop: -50,
            }}
            source={require("../../assets/images/Game/ButtonTruot.png")}
          />
          <ScrollView
            style={{
              position: "absolute",
              height: "140%",
            }}
            contentContainerStyle={{
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            ref={scrollViewRef}
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnable}
            onScroll={(ivent) => {
              if (scrollEnable) {
                if (ivent.nativeEvent.contentOffset.y >= 200) {
                  setScrollEnable(false);
                  upDate();
                  navigation.navigate("Congratulation", {
                    item: route.params.item,
                    collections:
                      randomLonNuoc === 1
                        ? "loc"
                        : randomLonNuoc === 2
                        ? "phuc"
                        : "an",
                    coins: randomCoin === 1 ? 50 : 100,
                  });
                }
              }
            }}
          >
            <View style={{ width: "100%", height: 600 }}></View>
            <Image
              source={require("../../assets/images/imageHome/dauLan.png")}
            />
            <View style={{ width: "100%", height: 300 }}></View>
          </ScrollView>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Game;
