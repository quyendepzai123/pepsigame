import { Text, View, Image, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonPlayNow from "../../components/ButtonPlayNow";
import ButtonTimePlay from "../../components/ButtonTimePlay";
import ButtonClose from "../../components/ButtonClose";
import ButtonScan from "../../components/ButtonScan";
import TitleBack from "../../components/TitleBack";
import styles from "./styles";
import { database, firebaseConfig } from "../../../config";
import { onValue, ref } from "firebase/database";

const Home = (props) => {
  const { navigation, route } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [timePlayFree, setTimePlayFree] = useState(1);
  const [timePlayExchange, settimePlayExchange] = useState(3);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const [isTrue, setIsTrue] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
      if (Object.keys(id).length === 0) {
        setId(route.params.item.id);
        setUser(route.params.item);
  }
  }, []);

  useEffect(() => {
    getDataUser();
    // if (Object.keys(user).length === 0) {
    //   setId(route.params.item.id);
    //   setUser(route.params.item);
    // }

    setTimeout(() => {
      setIsTrue(false);
    }, 1000);
  }, [id, isFocused]);

  const getDataUser = () => {
    const starCountRef = ref(database, "users/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          name: childData.name,
          phone: childData.phone,
          timesFrees: childData.timesFrees,
          timesExchanges: childData.timesExchanges,
          coins: childData.coins,
          collections: childData.collections,
          gift: childData.gift,
        });
      });
      array.map((item) => {
        if (item.id === id) {
          setUser(item);
          return item;
        } else {
          return null;
        }
      });
    });
  };

  return (
    <View style={styles.container}>
      {user.timesFrees + user.timesExchanges > 0 ? (
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
                style={{
                  backgroundColor:
                    user.timesFrees === 0 ? "#7A848A" : "#D02027",
                }}
                title="Lượt chơi miễn phí"
                timePlay={user.timesFrees}
                onPress={() =>
                  user.timesFrees === 0
                    ? alert("bạn đã hết Lượt chơi miễn phí")
                    : (setTimePlayFree(timePlayFree - 1),
                      navigation.navigate("Game", {
                        item: user,
                        timesFree: true,
                      }),
                      console.log(user.id),
                      setModalVisible(false))
                }
                source={
                  user.timesFrees === 0
                    ? require("../../assets/images/ButtonPlayNow/squareGray.png")
                    : require("../../assets/images/ButtonPlayNow/square.png")
                }
              />
              <ButtonTimePlay
                style={{
                  backgroundColor:
                    user.timesExchanges === 0 ? "#7A848A" : "#D02027",
                }}
                title="Lượt chơi quy đổi"
                timePlay={user.timesExchanges}
                onPress={() =>
                  user.timesExchanges === 0
                    ? alert("bạn đã hết lượt chơi quy đổi")
                    : (settimePlayExchange(timePlayExchange - 1),
                      navigation.navigate("Game", {
                        item: user,
                        timesFree: false,
                      }),
                      setModalVisible(false))
                }
                source={
                  user.timesExchanges === 0
                    ? require("../../assets/images/ButtonPlayNow/squareGray.png")
                    : require("../../assets/images/ButtonPlayNow/square.png")
                }
              />
            </LinearGradient>
          </View>
        </Modal>
      ) : (
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
            <LinearGradient
              colors={["#02A7F0", "#0063A7"]}
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

              <Text style={styles.textSCanThem}>
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
          </View>
        </Modal>
      )}

      <LinearGradient colors={["#02A7F0", "#0063A7"]} style={styles.box}>
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
        <TitleBack
          enableIconBack={false}
          onPress={() => alert("back")}
          titleScreen=""
          enableTitleBelow={false}
          timesPlay="3"
          select={true}
          onPressLogout={() => navigation.navigate("Login")}
        />

        <View style={{ alignItems: "center", marginTop: 90 }}>
          <Image
            style={{}}
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
              bottom: 0,
            }}
            source={require("../../assets/images/imageHome/caiTrong.png")}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.textHuongDan}>Hướng dẫn</Text>

          <ButtonPlayNow
            style={{
              marginBottom: 10,
            }}
            title="Chơi ngay"
            onPress={() => setModalVisible(true)}
            timePlay={user.timesFrees + user.timesExchanges + ""}
          />

          <ButtonWhite
            style={styles.buttonWhite}
            title="Quét mã"
            onPress={() => navigation.navigate("Scan")}
          />
          <ButtonWhite
            style={styles.buttonWhite}
            title="Bộ sưu tập"
            onPress={() => navigation.navigate("Collection", { item: user })}
          />
          <ButtonWhite
            style={styles.buttonWhite}
            title="Chi tiết quà tặng"
            onPress={() => navigation.navigate("MyGift", { user: user })}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Home;
