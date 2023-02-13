import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CheckBox from "expo-checkbox";
// import CheckBox from '@react-native-community/checkbox';
import ButtonWhite from "../../components/ButtonWhite";
import ButtonGray from "../../components/ButtonGray";
import ButtonRed from "../../components/ButtonRed";
import TextInputForm from "../../components/TextInputForm";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [sdt, setSdt] = useState("");
  const [name, setName] = useState("");
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (sdt.length === 10 && name.length !== 0) {
      setAgree(true);
    } else {
      setAgree(false);
    }
  }, [agree, sdt, name]);

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
            ĐĂNG KÝ
          </Text>
          <TextInputForm
            placeholder="Số điện thoại"
            onChangeText={(text) => setSdt(text)}
          />
          <TextInputForm
            placeholder="Tên người dùng"
            onChangeText={(text) => setName(text)}
          />

          <View style={{ flexDirection: "row", marginTop: 3 }}>
            <CheckBox
              style={{ borderRadius: 7, backgroundColor: "#fff" }}
              value={check}
              onValueChange={() => setCheck(!check)}
              color={check ? "#000000" : undefined}
            />
            <Text style={{ marginLeft: 6, color: "#fff", fontWeight: "bold" }}>
              Tôi đã đọc và đồng ý với{" "}
              <Text style={{ color: "#FFDD00" }}>thể lệ chương trình</Text>{" "}
              Pepsi Tết.
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 118 }}>
          {(agree) && (check)  ? (
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

export default Register;

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
