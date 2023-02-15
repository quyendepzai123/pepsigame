import { View, Text, Image } from "react-native";
import React from "react";

const Collection3Lon = (props) => {
    const { quantityAN, quantityLoc, quantityPhuc } = props
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Image
          style={{ width: 70, height: 180, marginBottom: 16 }}
          source={require("../../assets/images/Congratulation/lonPepsi.png")}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFF' }}>{quantityAN}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Image
          style={{ width: 70, height: 180, marginBottom: 16, }}
          source={require("../../assets/images/Congratulation/lon7up.png")}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold" , color: '#FFF'}}>{quantityLoc}</Text>
      </View>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 20,
        }}
      >
        <Image
          style={{ width: 70, height: 180, marginBottom: 16 }}
          source={require("../../assets/images/Congratulation/mirinda.png")}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", color: '#FFF' }}>{quantityPhuc}</Text>
      </View>
    </View>
  );
};

export default Collection3Lon;
