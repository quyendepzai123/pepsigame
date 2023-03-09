import { Text, View, Image, Modal, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TitleBack from "../../components/TitleBack";
import Collection3Lon from "../../components/Collection3Lon";
import QuantityExchange from "../../components/QuantityExchange";
import ButtonClose from "../../components/ButtonClose";
import ButtonScan from "../../components/ButtonScan";
import { useIsFocused } from "@react-navigation/native";
import { database } from "../../../config";
import { onValue, ref, update } from "firebase/database";
import * as Icons from "react-native-feather";
import styles from "./styles";

const Collection = (props) => {
  const { navigation, route } = props;
  const isFocused = useIsFocused();
  const [quantity, setQuantity] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleGift, setModalVisibleGift] = useState(false);
  const [id, setId] = useState("");
  const [user, setUser] = useState({});
  const [index, setIndex] = useState(0);
  const [arrayRandom, setArrayRandom] = useState([]);
  const [enableButtonChangeGift, setEnableButtonChangeGift] = useState(false);
  const [numGift, setNumGift] = useState(-1);

  useEffect(() => {
    getDataUser();
    if (Object.keys(user).length === 0) {
      setId(route.params.item.id);
      setUser(route.params.item);
    }
    if (user.an === 0 || user.loc === 0 || user.phuc === 0) {
      setQuantity(0);
    }
  }, [id, isFocused]);

  // useEffect(() => {
   
  // }, []);

  const getDataUser = () => {
    const starCountRef = ref(database, "users/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        // console.log(childData);
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
          // console.log(item.collections);
          setUser(item);
          return item;
        } else {
          return null;
        }
      });
    });
  };

  function upDate() {
    let count = 0,
      count2 = 0,
      count3 = 0,
      count4 = 0,
      count5 = 0;
    arrayRandom.map((item) => {
      if (item == 1) {
        count++;
      } else if (item == 2) {
        count2++;
      } else if (item == 3) {
        count3++;
      } else if (item == 4) {
        count4++;
      } else if (item == 5) {
        count5++;
      }
    }),
      update(ref(database, "users/" + user.id), {
        coins: user.coins + count * 300,
        collections: {
          loc: user.collections.loc - quantity,
          phuc: user.collections.phuc - quantity,
          an: user.collections.an - quantity,
        },
        gift: [
          {
            id: 2,
            name: "Pepsi Cap",
            image:
              "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-hat_ebjzqe.png",
            quantity: user.gift[0].quantity + count2,
            status: 1,
          },
          {
            id: 3,
            name: "Pepsi Jacket",
            image:
              "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-jacket_x8l0pp.png",
            quantity: user.gift[1].quantity + count3,
            status: 1,
          },
          {
            id: 4,
            name: "Pepsi Tote Bag",
            image:
              "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184899/pepsigame/pepsi-bag_jfofqa.png",
            quantity: user.gift[2].quantity + count4,
            status: 1,
          },
          {
            id: 5,
            name: "Pepsi Tumbler",
            image:
              "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-glass_imzylr.png",
            quantity: user.gift[3].quantity + count5,
            status: 1,
          },
        ],
      })
        .then(() => {
          console.log("update data successfully");
        })
        .catch((error) => {
          console.log(error);
        });
  }

  const Them = () => {
    if (
      quantity === user.collections.an ||
      quantity === user.collections.loc ||
      quantity === user.collections.phuc
    ) {
    } else {
      setQuantity(quantity + 1);
    }
  };
  const Giam = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };

  let array = [];
  const DoiQua = () => {
    setModalVisible(false);
    setModalVisibleGift(true);
    setIndex(quantity - 1);
    if (quantity > 1) {
      setEnableButtonChangeGift(true);
    }
    for (let i = 0; i < quantity; i++) {
      const randomGift = Math.floor(Math.random() * 5) + 1;
      array.push(randomGift);
      console.log(array);
      setArrayRandom(array);
    }
    setNumGift(numGift + 1);
  };
  const ChangeGift2 = () => {
    setModalVisibleGift(false);
    setNumGift(numGift + 1);
    setIndex(index - 1);
    setTimeout(() => {
      if (index > 1) {
        setModalVisibleGift(true);
        setEnableButtonChangeGift(true);
      } else {
        setModalVisibleGift(true);
        setEnableButtonChangeGift(false);
      }
    }, 1);
  };

  const ChangeGift = () => {
    setModalVisibleGift(false);
    upDate();
    navigation.navigate("Collection", { item: user });
  };
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

            <Image
              style={{ marginTop: 24 }}
              source={require("../../assets/images/Collection/BoxGift.png")}
            />
            <Text style={styles.textModalMuonDoi}>
              Bạn có chắc chắn muốn đổi{" "}
              <Text style={styles.textQuantity}>{quantity}</Text> combo hay
              không?
            </Text>
            <ButtonScan style={{}} title="Đổi quà" onPress={() => DoiQua()} />
          </LinearGradient>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleGift}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleGift(!modalVisibleGift);
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
            <View style={{ width: "100%", alignItems: "flex-end" }}></View>
            <View style={styles.coverModalGiftImage}>
              <Image
                style={{ marginRight: 50 }}
                source={require("../../assets/images/Collection/BoxGiftOpen.png")}
              />
              {arrayRandom[numGift] === 1 ? (
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/Collection/300Coins.png")}
                />
              ) : arrayRandom[numGift] === 2 ? (
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/Collection/cap.png")}
                />
              ) : arrayRandom[numGift] === 3 ? (
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/MyGift/giftCoat.png")}
                />
              ) : arrayRandom[numGift] === 4 ? (
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/MyGift/giftBag.png")}
                />
              ) : (
                <Image
                  style={{ position: "absolute" }}
                  source={require("../../assets/images/MyGift/giftGlass.png")}
                />
              )}
            </View>
            <Text style={styles.textModalBanNhanDuoc}>Bạn nhận được</Text>
            <Text style={styles.textModalNameGift}>
              {arrayRandom[numGift] === 1
                ? "300 coins"
                : arrayRandom[numGift] === 2
                ? "Pepsi Bucket Hat"
                : arrayRandom[numGift] === 3
                ? "Pepsi Bucket Hat"
                : arrayRandom[numGift] === 4
                ? "Pepsi Tote Bag"
                : "Pepsi Tumbler"}
            </Text>
            <ButtonScan style={{}} title="OK" onPress={() => ChangeGift()} />
            <Pressable
              disabled={!enableButtonChangeGift}
              position="absolute"
              right={24}
              top={"50%"}
              backgroundColor={enableButtonChangeGift ? "#D02027" : "#939393"}
              alignItems="center"
              justifyContent="center"
              padding={4}
              borderRadius={20}
              onPress={() => ChangeGift2()}
            >
              <Icons.ChevronRight stroke={"white"} fontSize={24} />
            </Pressable>
          </LinearGradient>
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
          titleScreen="Bộ sưu tập"
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
        <View style={styles.coverCoins}>
          <Image
            style={styles.backGroundCoins}
            source={require("../../assets/images/Collection/eslipCoins.png")}
          />
          <Text style={styles.textCoins}>{user.coins}</Text>
        </View>
        <Text style={styles.textSoCoinsHienTai}>Số coins hiện tại của bạn</Text>
        <Collection3Lon
          quantityAN={Object.keys(user).length === 0 ? 5 : user.collections.an}
          quantityLoc={
            Object.keys(user).length === 0 ? 5 : user.collections.loc
          }
          quantityPhuc={
            Object.keys(user).length === 0 ? 5 : user.collections.phuc
          }
        />
        <View style={styles.coverTextDetail}>
          <Text style={styles.textDetail}>
            Đổi ngay bộ sưu tập{" "}
            <Text style={styles.textANLOCPHUC}>AN - LỘC - PHÚC</Text> để có cơ
            hội nhận ngay <Text style={styles.textANLOCPHUC}>300 coins</Text>{" "}
            hoặc một <Text style={styles.textANLOCPHUC}>phần quà may mắn</Text>
          </Text>
        </View>
        <QuantityExchange
          onPressAdd={() => Them()}
          onPressRelease={() => Giam()}
          quantity={quantity}
          styleAdd={{
            backgroundColor:
              Object.keys(user).length === 0
                ? quantity === 5 || quantity === 4 || quantity === 3
                : quantity === user.collections.loc ||
                  quantity === user.collections.phuc ||
                  quantity === user.collections.an
                ? "#005082"
                : "#D02027",
          }}
          styleRelease={{
            backgroundColor: quantity <= 1 ? "#005082" : "#D02027",
          }}
        />
        <View style={styles.coverButton}>
          {quantity === 0 ? (
            <ButtonGray
              style={{}}
              title="Đổi ngay"
              onPress={() => alert("Bạn không đủ vật để đổi hãy sưu tập thêm")}
            />
          ) : (
            <ButtonRed
              style={{}}
              title="Đổi ngay"
              onPress={() => setModalVisible(true)}
            />
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Collection;
