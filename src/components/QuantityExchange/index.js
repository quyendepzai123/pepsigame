import { View, Text } from "react-native";
import React from "react";

const QuantityExchange = (props) => {
  const {
    quantity,
    onPressAdd,
    onPressRelease,
    styleAdd,
    styleRelease,
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        onPress={() => onPressRelease()}
        style={[
          {
            fontSize: 16,
            fontWeight: "bold",
            color: "#FFFFFF",
            width: 28,
            height: 28,
            lineHeight: 28,
            textAlign: "center",
            backgroundColor: "#005082",
            borderRadius: 20,
          },
           styleRelease,
        ]}
      >
        -
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          color: "#FFFFFF",
          marginHorizontal: 20,
        }}
      >
        {quantity}
      </Text>
      <Text
        onPress={() => onPressAdd()}
        style={[
            {
              fontSize: 16,
              fontWeight: "bold",
              color: "#FFFFFF",
              width: 28,
              height: 28,
              lineHeight: 28,
              textAlign: "center",
              backgroundColor: "#005082",
              borderRadius: 20,
            },
             styleAdd,
          ]}
      >
        +
      </Text>
    </View>
  );
};

export default QuantityExchange;
