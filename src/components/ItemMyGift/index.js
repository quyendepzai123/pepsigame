import { View, Text, Image } from "react-native";
import React from "react";

const ItemMyGift = (props) => {
  const { status, quantity, name } = props;
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
          source={require("../../assets/images/MyGift/giftHat.png")}
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
            {quantity}
          </Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#FFD76C",
          alignItems: "center",
          paddingVertical: 12,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <Text style={{fontSize: 16, color: "#005082", fontWeight: "bold" }}>{name}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 6,
          }}
        >
          <Text style={{ fontSize: 12, color: "#005082" }}>
            Trạng thái : 
          </Text>
          <Text style={{ fontSize: 12, color: "#00A61B" }}>
             {status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemMyGift;
