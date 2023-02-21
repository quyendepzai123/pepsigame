import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Pressable,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import TitleBack from "../../components/TitleBack";
import ButtonClose from "../../components/ButtonClose";
import ButtonScan from "../../components/ButtonScan";
import ItemGiftExchange from "../../components/ItemGiftExchange";
import ItemMyGift from "../../components/ItemMyGift";
import TextInputFormGiftExchange from "../../components/TextInputFormGiftExchange";

const MyGift = () => {
  const [quantity, setQuantity] = useState(1);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleGift, setModalVisibleGift] = useState(false);

  const [selectButtonGiftExchange, setSelectButtonGiftExchange] =
    useState(true);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const Validate = () => {
    if (name.length === 0) {
      setErrorName("Vui lòng nhập họ và tên");
      return false;
    } else {
      setErrorName("");
    }
    if (phone.length === 0) {
      setErrorPhone("Vui lòng nhập số điện thoại");
      return false;
    } else if (phone.length != 10) {
      setErrorPhone("Vui lòng nhập số điện thoại đúng 10 số");
      return false;
    } else {
      setErrorPhone("");
    }
    if (address.length === 0) {
      setErrorAddress("Vui lòng nhập địa chỉ");
      return false;
    } else {
      setErrorAddress("");
    }
    return DoiQua();
  };
  const DATA = [
    {
      id: 1,
      name: "Pepsi Bucket Hat",
      quantity: 600,
      price: 80,
      image: "../../assets/images/MyGift/giftHat.png",
    },
    {
      id: 2,
      name: "Pepsi Jacket",
      quantity: 10,
      price: 300,
      image: "../../assets/images/MyGift/giftHat.png",
    },
    {
      id: 3,
      name: "Pepsi Tote Bag",
      quantity: 600,
      price: 80,
      image: "../../assets/images/MyGift/giftHat.png",
    },
    {
      id: 4,
      name: "Pepsi Tumbler",
      quantity: 10,
      price: 600,
      image: "../../assets/images/MyGift/giftHat.png",
    },
  ];

  const DoiQua = () => {
    setModalVisible(false);
    setModalVisibleGift(true);
  };

  const RenderItemGiftExchange = ({ item }) => {
    return (
      <ItemGiftExchange
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        onPress={() => setModalVisible(true)}
      />
    );
  };

  const RenderItemMyGift = ({ item }) => {
    return <ItemMyGift name={item.name} status="Đã nhận" quantity="2" />;
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
        <View style={{ width: "100%" }}>
          <LinearGradient
            colors={["#FFD76C", "#F2CD6C", "#EEAD00"]}
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
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#005082",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                THÔNG TIN NHẬN QUÀ
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#005082",
                  fontWeight: "bold",
                  marginBottom: 16,
                }}
              >
                Quà của bạn:{" "}
                <Text style={{ fontSize: 18, color: "#D02027" }}>
                  Pepsi Tote Bag
                </Text>
              </Text>
              <TextInputFormGiftExchange
                header="Họ và tên"
                placeholder="Nhập họ và tên"
                onChangeText={(text) => setName(text)}
                error={errorName}
              />
              <TextInputFormGiftExchange
                header="Số điện thoại"
                placeholder="Nhập số điện thoại"
                onChangeText={(text) => setPhone(text)}
                error={errorPhone}
              />
              <TextInputFormGiftExchange
                style={{ height: 70 }}
                header="Địa chỉ"
                placeholder="Nhập địa chỉ của bạn"
                onChangeText={(text) => setAddress(text)}
                error={errorAddress}
              />

              <TextInputFormGiftExchange
                style={{ height: 70 }}
                header="Ghi chú"
                placeholder="Nhập ghi chú nếu có"
                onChangeText={(text) => setNote(text)}
              />
            </View>

            <ButtonScan
              style={{ width: 150, height: 50 }}
              title="Xác nhận"
              onPress={() => Validate()}
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
        <View>
          <LinearGradient
            colors={["#4F9636", "#4F9636"]}
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
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#FFDD00",
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                THÀNH CÔNG
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  marginBottom: 16,
                }}
              >
                Chúc mừng bạn nhận được quà từ
              </Text>
              <Text
                style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "bold" }}
              >
                Pepsi Tết
              </Text>
            </View>

            <ButtonScan
              style={{ width: 150, height: 50 }}
              title="Xác nhận"
              onPress={() => Validate()}
            />
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
          style={{}}
          titleScreen="Chi tiết quà tặng"
          onPressBack={() => alert("back nè")}
          onPressLogout={() => alert("Logout nè")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <Pressable
            onPress={() => setSelectButtonGiftExchange(true)}
            style={{
              width: 140,
              height: 40,
              backgroundColor: selectButtonGiftExchange ? "#D02027" : "#FFFFFF",
              justifyContent: "center",
              alignItems: "center",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: selectButtonGiftExchange ? "#FFFFFF" : "#D02027" }}>Đổi quà</Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectButtonGiftExchange(false)}
            style={{
              width: 140,
              height: 40,
              backgroundColor: selectButtonGiftExchange ? "#FFFFFF" : "#D02027",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: selectButtonGiftExchange ? "#D02027" : "#FFFFFF" }}>
              Quà của tôi
            </Text>
          </Pressable>
        </View>
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
        {selectButtonGiftExchange ? (
          <View>
            <View
              style={{
                alignItems: "center",
                marginTop: 32,
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
                marginBottom: 30,
              }}
            >
              Số coins hiện tại của bạn
            </Text>
          </View>
        ) : (
          <View style={{ marginTop: 28 }}></View>
        )}

        {selectButtonGiftExchange ? (
          <FlatList
            style={{
              flexDirection: "column",
              paddingHorizontal: 10,
              paddingBottom: 50,
            }}
            numColumns={2}
            horizontal={false}
            renderItem={RenderItemGiftExchange}
            data={DATA}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            style={{
              flexDirection: "column",
              paddingHorizontal: 10,
              paddingBottom: 50,
            }}
            numColumns={2}
            horizontal={false}
            renderItem={RenderItemMyGift}
            data={DATA}
            keyExtractor={(item) => item.id}
          />
        )}
      </LinearGradient>
    </View>
  );
};

export default MyGift;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  box: {
    width: "100%",
    height: "100%",
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
