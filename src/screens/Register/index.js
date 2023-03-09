import { Text, View, Image, ToastAndroid } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "expo-checkbox";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputForm from "../../components/TextInputForm";
import styles from "./styles";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig, firebase, database } from "../../../config";
import { onValue, ref } from "firebase/database";

const Register = (props) => {
  const { navigation } = props;
  const [agree, setAgree] = useState(false);
  const [sdt, setSdt] = useState("");
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);
  const recaptcha = useRef(null);

  useEffect(() => {
    if (sdt.length === 10 && name.length !== 0) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agree, sdt, name]);

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
      let count = 0;
      array.map((item) => {
        if (item.phone == sdt) {
          count = 1;
          // return ToastAndroid.show(
          //   "Số điện thoại đã được đăng kí vui lòng nhập số điện thoại khác",
          //   ToastAndroid.SHORT
          // );
        }
      });
      if (count === 0) {
        navigation.navigate("RegisterOTP", { phone: sdt, name: name });
      }
    });
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptcha}
        firebaseConfig={firebaseConfig}
      />
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
        <View style={{ flexDirection: "row", marginBottom: 120 }}>
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
        <View style={styles.coverTextWelcome}>
          <Text style={styles.textWelcome}>Hey, mừng bạn đến với</Text>
          <Text style={styles.textPepsiTet}>Pepsi Tết</Text>
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
        <View style={styles.form}>
          <Text style={styles.textHeaderDangKi}>ĐĂNG KÝ</Text>
          <TextInputForm
            placeholder="Số điện thoại"
            onChangeText={(text) => setSdt(text)}
          />
          <TextInputForm
            placeholder="Tên người dùng"
            onChangeText={(text) => setName(text)}
          />

          <View style={styles.coverCheckBox}>
            <CheckBox
              style={styles.checkBox}
              value={check}
              onValueChange={() => setCheck(!check)}
              color={check ? "#000000" : undefined}
            />
            <Text style={styles.textDongYCheckbox}>
              Tôi đã đọc và đồng ý với{" "}
              <Text style={{ color: "#FFDD00" }}>thể lệ chương trình</Text>{" "}
              Pepsi Tết.
            </Text>
          </View>
        </View>
        <View style={styles.coverButton}>
          {agree && check ? (
            <ButtonRed title="Lấy mã OTP" onPress={() => getDataUser()} />
          ) : (
            <ButtonGray
              title="Lấy mã OTP"
              onPress={() =>
                alert(
                  "Vui lòng điền đủ thông tin và đồng ý thể lệ chương trình"
                )
              }
            />
          )}
          <Text style={styles.textHoac}>Hoặc</Text>
          <ButtonWhite
            style={{ backgroundColor: "#fff" }}
            title="Đăng nhập"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Register;
