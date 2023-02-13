import { View, Text, TextInput } from "react-native";
import React from "react";

const TextInputForm = (props) => {
  const { onChangeText, placeholder, maxLength } = props;
  return (
    <TextInput
      onChangeText={onChangeText}
      placeholder={placeholder}
      maxLength={maxLength}
      style={{
        width: "100%",
        height: 44,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginVertical: 10,
        padding: 12,
      }}
    />
  );
};

export default TextInputForm;
