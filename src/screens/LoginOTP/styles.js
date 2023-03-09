import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  coverXacMinhOTP: {
    justifyContent: "center",
    alignItems: "center",
  },
  textXacMinhOTP: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  textNhapMaOTP: {
    fontSize: 14,
    color: "#FFFFFF",
  },
  form: {
    flexDirection: "row",
    marginVertical: 32,
  },
  coverGuiLaiMa: {
    flexDirection: "row",
    marginTop: 24,
  },
  textChuaNhanDuocMa: {
    fontSize: 14,
    color: "#fff",
    marginVertical: 12,
    marginRight: 4,
  },
  textGuiLaiMa: {
    fontSize: 14,
    color: "#FFDD00",
    marginVertical: 12,
  },
});

export default styles;