import { View, Text, Image } from "react-native";
import React from "react";

const CongratulationLonNoc = (props) => {
  const { source, quantityCoins, title } = props;
  return (
    <View style={{ alignItems: "center", width: "100%" }}>
      <View style={{ alignItems: "center", width: 180 }}>
        <Image
          style={{
            marginTop: 34,
          }}
          source={source}
        />
        <Text
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 80,
            height: 80,
            fontSize: 34,
            fontWeight: "bold",
            color: "#FFFFFF",
            backgroundColor: "#D02027",
            textAlign: "center",
            lineHeight: 80,
            borderRadius: 50,
            borderColor: "#FBC926",
            borderWidth: 1,
          }}
        >
          {quantityCoins}
        </Text>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            marginVertical: 8,
            color: "#FFFFFF",
            width: 280,
          }}
        >
          Chúc mừng bạn đã nhận được
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#FFDD00",
            }}
          >
            {"\n"}
            {title}{" "}
          </Text>
          ứng với
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#FFDD00",
            }}
          >
            {" "}
            {quantityCoins} coins
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CongratulationLonNoc;
