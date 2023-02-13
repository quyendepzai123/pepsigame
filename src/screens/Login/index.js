import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "expo-checkbox";
// import CheckBox from '@react-native-community/checkbox';
import ButtonWhite from "../../components/ButtonWhite";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputForm from "../../components/TextInputForm";

const Login = () => {
  const [agree, setAgree] = useState(false);
  const [sdt, setSdt] = useState("");

  useEffect(() => {
    if (sdt.length === 10) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agree, sdt]);

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
        <View style={{ alignItems: "center", marginHorizontal: 20 }}>
          <Text style={{ color: "#ffffff", fontSize: 30, fontWeight: "bold" }}>
          ĐĂNG NHẬP
          </Text>
          <View style={{width: '100%', marginTop: 12}}>
            <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF'}}>Số điện thoại</Text>
          <TextInputForm
            placeholder="Số điện thoại"
            onChangeText={(text) => setSdt(text)}
            maxLength={10}
          />
          </View>
          
          <Image
          style={{
            marginTop: 10
          }}
          source={require("../../assets/images/3lon.png")}
        />

          
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          {(agree) ? (
            <ButtonRed title="Lấy mã OTP" onPress={() => alert(agree)} />
          ) : (
            <ButtonGray title="Lấy mã OTP" onPress={() => alert(agree)} />
          )}
          <Text style={{ fontSize: 16, color: "#fff", marginVertical: 12 }}>
            Hoặc
          </Text>
          <ButtonWhite
            style={{ backgroundColor: "#fff" }}
            title="Đăng nhập"
            onPress={() => alert("Quyen ne")}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Login;

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
