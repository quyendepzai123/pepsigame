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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    width: "80%",
    marginBottom: 4,
    textAlign: "center",
    color: "#FFDD00",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  coverCoins: {
    alignItems: "center",
    marginTop: 48,
    justifyContent: "center",
  },
  backGroundCoins: {
    backgroundColor: "#FF0F18",
    borderRadius: 50,
  },
  textCoins: {
    position: "absolute",
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
  },
  textSoCoinsHienTai: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
    marginBottom: 50,
  },
  coverTextDetail: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 20,
  },
  textDetail: {
    width: 270,
    fontSize: 16,
    textAlign: "center",
    color: "#FFF",
    lineHeight: 20,
  },
  textANLOCPHUC: {
    color: "#FFDD00",
    fontWeight: "bold",
  },
  coverButton: {
    alignItems: "center",
    marginTop: 60,
  },

  // Modal xac nhan doi
  textModalMuonDoi: {
    width: 220,
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
  },
  textQuantity: { color: "#FFDD00", fontWeight: "bold" },

  // Modal gift
  coverModalGiftImage: {
    marginTop: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  textModalBanNhanDuoc: {
    width: 220,
    color: "#FFF",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
  },
  textModalNameGift: {
    color: "#FFDD00",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "400",
  },
});


export default styles;