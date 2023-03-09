import { Text, View, Image, Modal, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import TitleBack from "../../components/TitleBack";
import ButtonClose from "../../components/ButtonClose";
import ButtonScan from "../../components/ButtonScan";
import ItemGiftExchange from "../../components/ItemGiftExchange";
import ItemMyGift from "../../components/ItemMyGift";
import TextInputFormGiftExchange from "../../components/TextInputFormGiftExchange";
import { onValue, ref, update } from "firebase/database";
import { useIsFocused } from "@react-navigation/native";
import { database } from "../../../config";
import styles from "./styles";

const MyGift = (props) => {
  const { navigation, route } = props;
  const isFocused = useIsFocused();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleGift, setModalVisibleGift] = useState(false);
  const [selectButtonGiftExchange, setSelectButtonGiftExchange] =
    useState(true);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [user, setUser] = useState({});
  const [product, setProduct] = useState([]);
  const [id, setId] = useState("");

  const [errorName, setErrorName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [itemProduct, setItemProduct] = useState([]);

  useEffect(() => {
    getDataUser();
    getDataProduct();
    if (Object.keys(user).length === 0) {
      setId(route.params.user.id);
      setUser(route.params.user);
    }
  }, [id, isFocused]);

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
    setName("");
    setAddress("");
    setPhone("");
    setNote("");
    return DoiQua();
  };

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
          // console.log(item.gift[0].quantity);
          setUser(item);
          return item;
        } else {
          return null;
        }
      });
    });
  };

  const getDataProduct = () => {
    const starCountRef = ref(database, "products/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          name: childData.name,
          quantity: childData.quantity,
          price: childData.price,
          image: childData.image,
        });
      });
      setProduct(array);
    });
  };

  function upDate(item) {
    update(ref(database, "users/" + user.id), {
      coins: user.coins - item.price,
      gift: [
        {
          id: 2,
          name: "Pepsi Cap",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-hat_ebjzqe.png",
          quantity:
            item.id == "2925427"
              ? user.gift[0].quantity + 1
              : user.gift[0].quantity,
          status: 1,
        },
        {
          id: 3,
          name: "Pepsi Jacket",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-jacket_x8l0pp.png",
          quantity:
            item.id == "4752630"
              ? user.gift[1].quantity + 1
              : user.gift[1].quantity,
          status: 1,
        },
        {
          id: 4,
          name: "Pepsi Tote Bag",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184899/pepsigame/pepsi-bag_jfofqa.png",
          quantity:
            item.id == "6404387"
              ? user.gift[2].quantity + 1
              : user.gift[2].quantity,
          status: 1,
        },
        {
          id: 5,
          name: "Pepsi Tumbler",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-glass_imzylr.png",
          quantity:
            item.id == "5477465"
              ? user.gift[3].quantity + 1
              : user.gift[3].quantity,
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

  const DoiQua = () => {
    setModalVisible(false);
    setModalVisibleGift(true);
  };

  const ChangeGift = (item) => {
    if (item.price > user.coins) {
      alert("Bạn không đủ coins để đổi");
    } else {
      setModalVisible(true);
      setItemProduct(item);
      console.log(itemProduct);
    }
  };

  const confirm = () => {
    upDate(itemProduct);
    setModalVisibleGift(false);
    navigation.navigate("MyGift", { user: user });
  };

  const RenderItemGiftExchange = ({ item }) => {
    return (
      <ItemGiftExchange
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        image={item.image}
        onPress={() => ChangeGift(item)}
      />
    );
  };

  const RenderItemMyGift = ({ item }) => {
    return (
      <ItemMyGift
        name={item.name}
        status={item.status}
        quantity={item.quantity}
        image={item.image}
      />
    );
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
              <Text style={styles.textModalThongTinNhanQua}>
                THÔNG TIN NHẬN QUÀ
              </Text>
              <Text style={styles.textModalNameGift}>
                Quà của bạn:{" "}
                <Text style={{ fontSize: 18, color: "#D02027" }}>
                  {itemProduct.name}
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
            <View style={styles.coverTextChangeGiftSuccess}>
              <Text style={styles.textModalThanhCong}>THÀNH CÔNG</Text>
              <Text style={styles.textModalChucMung}>
                Chúc mừng bạn nhận được quà từ
              </Text>
              <Text style={styles.textPepsiTet}>Pepsi Tết</Text>
            </View>

            <ButtonScan
              style={{ width: 150, height: 50 }}
              title="Xác nhận"
              onPress={() => confirm()}
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
          enableIconBack={true}
          titleScreen="Chi tiết quà tặng"
          onPressBack={() => navigation.navigate("Home", { item: user })}
          onPressLogout={() => navigation.navigate("Login")}
        />
        <View style={styles.coverButtonChangeAndMyGift}>
          <Pressable
            onPress={() => setSelectButtonGiftExchange(true)}
            style={[
              styles.ButtonDoiQua,
              {
                backgroundColor: selectButtonGiftExchange
                  ? "#D02027"
                  : "#FFFFFF",
              },
            ]}
          >
            <Text
              style={[
                styles.textDoiQua,
                { color: selectButtonGiftExchange ? "#FFFFFF" : "#D02027" },
              ]}
            >
              Đổi quà
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setSelectButtonGiftExchange(false)}
            style={[
              styles.buttonMyGift,
              {
                backgroundColor: selectButtonGiftExchange
                  ? "#FFFFFF"
                  : "#D02027",
              },
            ]}
          >
            <Text
              style={[
                styles.textQuaCuaToi,
                { color: selectButtonGiftExchange ? "#D02027" : "#FFFFFF" },
              ]}
            >
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
            <View style={styles.coverCoins}>
              <Image
                style={styles.backGroundCoins}
                source={require("../../assets/images/Collection/eslipCoins.png")}
              />
              <Text style={styles.textCoins}>{user.coins}</Text>
            </View>
            <Text style={styles.textSoCoinHienTai}>
              Số coins hiện tại của bạn
            </Text>
          </View>
        ) : (
          <View style={{ marginTop: 28 }}></View>
        )}

        {selectButtonGiftExchange ? (
          <FlatList
            style={styles.flatListDoiQua}
            numColumns={2}
            horizontal={false}
            renderItem={RenderItemGiftExchange}
            data={product}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <FlatList
            style={styles.flatListQuaCuaToi}
            numColumns={2}
            horizontal={false}
            renderItem={RenderItemMyGift}
            data={user.gift}
            keyExtractor={(item) => item.id}
          />
        )}
      </LinearGradient>
    </View>
  );
};

export default MyGift;
