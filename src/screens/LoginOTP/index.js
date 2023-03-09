import { Text, View, Image, ToastAndroid } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputBox from "../../components/TextInputBox";
import styles from "./styles";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig, firebase } from "../../../config";
import { useIsFocused } from "@react-navigation/native";

const LoginOTP = (props) => {
  const { navigation, route } = props;
  const [code, setCode] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [number5, setNumber5] = useState("");
  const [number6, setNumber6] = useState("");
  const [isTrue, setIsTrue] = useState(true);

  useEffect(() => {
    setCode(number1 + number2 + number3 + number4 + number5 + number6);
  }, [code, number1, number2, number3, number4, number5, number6]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) {
      if (!isTrue) {
        navigation.navigate("Login");
      }
    }
  }, [isFocused]);

  const [verify, setVerify] = useState(null);
  const recaptcha = useRef(null);

  const sendVerify = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber("+84" + route.params.item.phone, recaptcha.current)
      .then(setVerify);
  };
  useEffect(() => {
    sendVerify();
  }, []);
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verify, code);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode("");
        setIsTrue(false);
        ToastAndroid.show("Login successful", ToastAndroid.SHORT);
        navigation.navigate("Home", { item: route.params.item });
      })
      .catch((err) => {
        ToastAndroid.show("Login failed: xem lại mã code", ToastAndroid.SHORT);
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
        <View style={styles.coverXacMinhOTP}>
          <Text style={styles.textXacMinhOTP}>Xác minh OTP</Text>
          <Text style={styles.textNhapMaOTP}>
            Nhập mã OTP vừa được gửi về điện thoại của bạn
          </Text>
          <View style={styles.form}>
            <TextInputBox onChangeText={(text) => setNumber1(text)} />
            <TextInputBox onChangeText={(text) => setNumber2(text)} />
            <TextInputBox onChangeText={(text) => setNumber3(text)} />
            <TextInputBox onChangeText={(text) => setNumber4(text)} />
            <TextInputBox onChangeText={(text) => setNumber5(text)} />
            <TextInputBox onChangeText={(text) => setNumber6(text)} />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          {!(code.length === 6) ? (
            <ButtonGray
              title="Xác nhận"
              onPress={() =>
                ToastAndroid.show("Vui lòng nhập đủ mã OTP", ToastAndroid.SHORT)
              }
            />
          ) : (
            <ButtonRed title="Xác nhận" onPress={() => confirmCode()} />
          )}
          <View style={styles.coverGuiLaiMa}>
            <Text style={styles.textChuaNhanDuocMa}>
              Bạn chưa nhận được mã?
            </Text>
            <Text style={styles.textGuiLaiMa} onPress={() => sendVerify()}>
              Gửi lại mã
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginOTP;
