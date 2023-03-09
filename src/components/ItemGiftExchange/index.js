import { View, Text, Image } from "react-native";
import React from "react";
import ButtonWhite from "../ButtonWhite";

const ItemGiftExchange = (props) => {
  const { price, quantity, name, onPress, image } = props;
  return (
    <View
      style={{
        width: "50%",
        height: 263,
        padding: 10,
        marginBottom: 14,
        borderRadius: 12,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 170,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
      >
        <Image
          style={{ width: "70%", height: "70%" }}
          source={{ uri: image }}
        />
        <View
          style={{
            position: "absolute",
            right: -4,
            top: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/MyGift/coverPrice.png")}
          />
          <Text
            style={{
              position: "absolute",
              top: 8,
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            {price}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#D02027",
          alignItems: "center",
          paddingVertical: 12,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <Text style={{ color: "#FFDD00", fontWeight: "bold" }}>{name}</Text>
        <Text style={{ fontSize: 10, color: "#FFFFFF", marginBottom: 6 }}>
          Còn lại: {quantity}
        </Text>
        <ButtonWhite
          style={{ width: 108, height: 32, backgroundColor: "#FFF" }}
          title="Đổi quà"
          onPress={() => onPress()}
        />
      </View>
    </View>
  );
};

export default ItemGiftExchange;
