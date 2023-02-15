import { StyleSheet, Text, View, Image, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TitleBack from "../../components/TitleBack";
import Collection3Lon from "../../components/Collection3Lon";
import QuantityExchange from "../../components/QuantityExchange";
import PopupDoiQua from "../../components/PopupDoiQua";
import ButtonClose from "../../components/ButtonClose";
import ButtonScan from "../../components/ButtonScan";

const Collection = () => {
  const [quantity, setQuantity] = useState(1);
  const [quantityAN, setQuantityAN] = useState(8);
  const [quantityLoc, setQuantityLoc] = useState(4);
  const [quantityPhuc, setQuantityPhuc] = useState(5);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleGift, setModalVisibleGift] = useState(false);

  useEffect(() => {
    if (quantityAN === 0 || quantityLoc === 0 || quantityPhuc === 0) {
      setQuantity(0);
    }
    console.log(quantity);
  }, [quantity]);

  const Them = () => {
    if (
      quantity === quantityAN ||
      quantity === quantityLoc ||
      quantity === quantityPhuc
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

  const DoiQua = () => {
    setModalVisible(false);
    setModalVisibleGift(true);
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
            <Text
              style={{
                width: 220,
                color: "#FFF",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "400",
              }}
            >
              Bạn có chắc chắn muốn đổi{" "}
              <Text style={{ color: "#FFDD00", fontWeight: "bold" }}>
                {quantity}
              </Text>{" "}
              combo hay không?
            </Text>
            <ButtonScan
              style={{}}
              title="Đổi quà"
              onPress={() => DoiQua()}
            />
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
              <ButtonClose
                onPress={() => setModalVisibleGift(!modalVisibleGift)}
              />
            </View>
            <View
              style={{
                marginTop: 24,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 18,
              }}
            >
              <Image
                style={{ marginRight: 50 }}
                source={require("../../assets/images/Collection/BoxGiftOpen.png")}
              />
              <Image
                style={{ position: "absolute" }}
                source={require("../../assets/images/Collection/cap.png")}
              />
            </View>
            <Text
              style={{
                width: 220,
                color: "#FFF",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "400",
              }}
            >
              Bạn nhận được
            </Text>
            <Text
              style={{
                color: "#FFDD00",
                fontWeight: "bold",
                fontSize: 18,
                textAlign: "center",
                fontWeight: "400",
              }}
            >
              Pepsi Bucket Hat
            </Text>
            <ButtonScan style={{}} title="OK" onPress={() => alert("chịu")} />
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
          titleScreen="Bộ sưu tập"
          onPressBack={() => alert("back nè")}
          onPressLogout={() => alert("Logout nè")}
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
        <View
          style={{
            alignItems: "center",
            marginTop: 48,
            justifyContent: "center",
          }}
        >
          <Image
            style={{
              backgroundColor: "#FF0F18",
              borderRadius: 50,
            }}
            source={require("../../assets/images/Collection/eslipCoins.png")}
          />
          <Text
            style={{
              position: "absolute",
              fontSize: 32,
              fontWeight: "bold",
              color: "#FFF",
            }}
          >
            700
          </Text>
        </View>
        <Text
          style={{
            marginTop: 12,
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            color: "#FFF",
            marginBottom: 50,
          }}
        >
          Số coins hiện tại của bạn
        </Text>
        <Collection3Lon
          quantityAN={quantityAN}
          quantityLoc={quantityLoc}
          quantityPhuc={quantityPhuc}
        />
        <View style={{ alignItems: "center", marginTop: 16, marginBottom: 20 }}>
          <Text
            style={{
              width: 270,
              fontSize: 16,
              textAlign: "center",
              color: "#FFF",
              lineHeight: 20,
            }}
          >
            Đổi ngay bộ sưu tập{" "}
            <Text style={{ color: "#FFDD00", fontWeight: "bold" }}>
              AN - LỘC - PHÚC
            </Text>{" "}
            để có cơ hội nhận ngay{" "}
            <Text style={{ color: "#FFDD00", fontWeight: "bold" }}>
              300 coins
            </Text>{" "}
            hoặc một{" "}
            <Text style={{ color: "#FFDD00", fontWeight: "bold" }}>
              phần quà may mắn
            </Text>
          </Text>
        </View>
        <QuantityExchange
          onPressAdd={() => Them()}
          onPressRelease={() => Giam()}
          quantity={quantity}
          styleAdd={{
            backgroundColor:
              quantity === quantityAN ||
              quantity === quantityLoc ||
              quantity === quantityPhuc
                ? "#005082"
                : "#D02027",
          }}
          styleRelease={{
            backgroundColor: quantity <= 1 ? "#005082" : "#D02027",
          }}
        />
        <View style={{ alignItems: "center", marginTop: 60 }}>
          {quantity === 0 ? (
            <ButtonGray
              style={{}}
              title="Đổi ngay"
              onPress={() => alert("Quyen ne")}
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
