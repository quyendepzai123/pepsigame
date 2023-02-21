import { View, Text, TextInput } from "react-native";
import React from "react";

const TextInputFormGiftExchange = (props) => {
  const { placeholder, header, style, onChangeText, error } = props;
  return (
    <View style={{ width: "100%" , marginBottom: 12}}>
      <Text style={{ color: "#005082", fontSize: 14, fontWeight: "bold" }}>
        {header}
      </Text>
      <TextInput
        style={[{
            width: 300,
            height: 40,
            color: "#000000",
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 12,
            borderRadius: 8,
            marginTop: 8,
          }, style]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Text style={{ fontSize: 12, color: '#D02027', marginTop: 3}}>{error}</Text>
    </View>
  );
};

export default TextInputFormGiftExchange;
