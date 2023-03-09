import { Text, View, Image, ToastAndroid } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonWhite from "../../components/ButtonWhite";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputForm from "../../components/TextInputForm";
import styles from "./styles";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig, database } from "../../../config";
import { onValue, ref } from "firebase/database";

const Login = (props) => {
  const { navigation } = props;
  const [sdt, setSdt] = useState("");
  const [agree, setAgree] = useState(false);
  const recaptcha = useRef(null);

  useEffect(() => {
    if (sdt.length === 10) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agree, sdt]);


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
        if (item.phone == sdt) {
          navigation.navigate("LoginOTP", {
            item: item,
          });
          return false;
        }
        //  else {
        //   ToastAndroid.show(
        //     "SỐ điện thoại chưa đăng kí tài khoản",
        //     ToastAndroid.SHORT
        //   );
        //   return false;
        // }
      });
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
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Text style={{ color: "#ffffff", fontSize: 18 }}>
            Hey, mừng bạn đến với
          </Text>
          <Text style={{ color: "#ffffff", fontSize: 30, fontWeight: "bold" }}>
            Pepsi Tết
          </Text>
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
        <View style={styles.coverHeaderForm}>
          <Text style={styles.textDangNhap}>ĐĂNG NHẬP</Text>
          <View style={styles.coverForm}>
            <Text style={styles.textSDT}>Số điện thoại</Text>
            <TextInputForm
              placeholder="Số điện thoại"
              onChangeText={(text) => setSdt(text)}
              maxLength={20}
            />
          </View>

          <Image
            style={{
              marginTop: 10,
            }}
            source={require("../../assets/images/3lon.png")}
          />
        </View>
        <View style={styles.coverButton}>
          {agree ? (
            <ButtonRed title="Lấy mã OTP" onPress={() => getDataUser()} />
          ) : (
            <ButtonGray
              title="Lấy mã OTP"
              onPress={() => alert("Vui lòng điền đúng số điện thoại")}
            />
          )}
          <Text style={styles.textHoac}>Hoặc</Text>
          <ButtonWhite
            style={{ backgroundColor: "#fff" }}
            title="Đăng kí"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Login;
