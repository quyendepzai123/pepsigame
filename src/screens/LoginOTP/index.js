import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "expo-checkbox";
// import CheckBox from '@react-native-community/checkbox';
import ButtonWhite from "../../components/ButtonWhite";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputBox from "../../components/TextInputBox";
import TextInputForm from "../../components/TextInputForm";

import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { firebaseConfig } from "../../../config";
import firebase from "firebase";

const LoginOTP = (props) => {
  const { navigation, route } = props;
  const [code, setCode] = useState("");
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [number3, setNumber3] = useState("");
  const [number4, setNumber4] = useState("");
  const [agree, setAgree] = useState(false);
  useEffect(() => {
    setCode(number1 + number2 + number3 + number4);
  }, [code, number1, number2, number3, number4]);

  const [confirm, setConfirm] = useState(null);
  const [sdt, setSdt] = useState("");
  const [code1, setCode1] = useState("");
  const [verify, setVerify] = useState(null);
  const recaptcha = useRef(null);
  const [oke, setOke] = useState(false);

  const sendVerify = () => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber("+84" + route.params.phone, recaptcha.current)
      .then(setVerify);
    setSdt("");
  };
  useEffect(() => {
    console.log(route.params.phone + "_" + verify);
    sendVerify();
  }, []);
  const confirmCode = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verify,
      code1
    );
    firebase
      .auth()
      .signInWithCredential(credential)
      .then(() => {
        setCode1("");
      })
      .catch((err) => {
        alert(err);
      });
    alert("Login successful");
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
            // width: 75,
            // height: 190,
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: 8,
            }}
          >
            Xác minh OTP
          </Text>
          <Text style={{ fontSize: 14, color: "#FFFFFF" }}>
            Nhập mã OTP vừa được gửi về điện thoại của bạn
          </Text>
          <View style={{ flexDirection: "row", marginVertical: 32 }}>
            <TextInputBox onChangeText={(text) => setNumber1(text)} />
            <TextInputBox onChangeText={(text) => setNumber2(text)} />
            <TextInputBox onChangeText={(text) => setNumber3(text)} />
            <TextInputBox onChangeText={(text) => setNumber4(text)} />
          </View>
          <TextInputForm
            placeholder="Số điện thoại"
            onChangeText={(text) => setCode1(text)}
            maxLength={20}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          {!(code.length === 4) ? (
            <ButtonGray title="Xác nhận" onPress={() => confirmCode()} />
          ) : (
            <ButtonRed title="Xác nhận" onPress={() => confirmCode()} />
          )}
          <View style={{ flexDirection: "row", marginTop: 24 }}>
            <Text
              style={{
                fontSize: 14,
                color: "#fff",
                marginVertical: 12,
                marginRight: 4,
              }}
            >
              Bạn chưa nhận được mã?
            </Text>
            <Text
              style={{ fontSize: 14, color: "#FFDD00", marginVertical: 12 }}
            >
              Gửi lại mã
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default LoginOTP;

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
});
