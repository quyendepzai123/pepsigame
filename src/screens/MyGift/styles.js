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

  coverButtonChangeAndMyGift: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },

  ButtonDoiQua: {
    width: 140,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  textDoiQua: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonMyGift: {
    width: 140,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  textQuaCuaToi: {
    fontSize: 18,
    fontWeight: "bold",
  },
  coverCoins: {
    alignItems: "center",
    marginTop: 32,
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
  textSoCoinHienTai: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FFF",
    marginBottom: 30,
  },
  flatListDoiQua: {
    flexDirection: "column",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  flatListQuaCuaToi: {
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingBottom: 50,
  },

  // Modal thoong tin nhan qua

  textModalThongTinNhanQua: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#005082",
    textAlign: "center",
    marginBottom: 20,
  },
  textModalNameGift: {
    fontSize: 16,
    color: "#005082",
    fontWeight: "bold",
    marginBottom: 16,
  },

  // Modal change gift thanh cong
  coverTextChangeGiftSuccess: {
    alignItems: "center",
    justifyContent: "center",
  },
  textModalThanhCong: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFDD00",
    textAlign: "center",
    marginBottom: 20,
  },
  textModalChucMung: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginBottom: 16,
  },
  textPepsiTet: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default styles;
