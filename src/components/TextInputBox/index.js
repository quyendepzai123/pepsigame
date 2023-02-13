import { View, Text, TextInput } from "react-native";
import React from "react";

const TextInputBox = (props) => {
  const { onChangeText, onPress } = props;
  return (
    <TextInput
      keyboardType="numeric"
      onChangeText={onChangeText}
      onPress={() => onPress()}
      placeholder="-"
      style={{
        width: 44,
        height: 44,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        alignItems: "center",
        textAlign: "center",
        marginHorizontal: 12,
        fontSize: 18,
      }}
      maxLength={1}
    />
  );
};

export default TextInputBox;
