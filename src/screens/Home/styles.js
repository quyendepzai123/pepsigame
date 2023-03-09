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
    color: "#D02027",
    fontSize: 22,
    fontWeight: "bold",
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textHuongDan: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#FFDD00",
  },
  buttonWhite: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },

  // Modal Scan het luot
  textSCanThem: {
    width: 220,
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
});

export default styles;