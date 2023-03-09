import { ref, set, onValue } from "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import { database, firebase } from "../../../config";
import API_ROUTES from "./apiRoutes";

const AuthAPI = {
  createUser(name, phone) {
    const randomID = Math.floor(Math.random() * 10000000) + 1000000;
    set(ref(database, API_ROUTES.user + randomID), {
      name: name,
      phone: phone,
      timesFrees: 5,
      timesExchanges: 5,
      coins: 0,
      collections: {
        phuc: 0,
        loc: 0,
        an: 0,
      },
      gift: [
        {
          id: 2,
          name: "Pepsi Cap",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-hat_ebjzqe.png",
          quantity: 0,
          status: 1,
        },
        {
          id: 3,
          name: "Pepsi Jacket",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-jacket_x8l0pp.png",
          quantity: 0,
          status: 1,
        },
        {
          id: 4,
          name: "Pepsi Tote Bag",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184899/pepsigame/pepsi-bag_jfofqa.png",
          quantity: 0,
          status: 1,
        },
        {
          id: 5,
          name: "Pepsi Tumbler",
          image:
            "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-glass_imzylr.png",
          quantity: 0,
          status: 1,
        },
      ],
    });
  },

  createProduct() {
    const randomID = Math.floor(Math.random() * 10000000) + 999999;
    set(ref(database, API_ROUTES.product + randomID), {
      name: "Pepsi Tumbler",
      quantity: 100,
      price: 300,
      image:
        "https://res.cloudinary.com/dlpl2vcpg/image/upload/v1678184898/pepsigame/pepsi-glass_imzylr.png",
    });
  },

  getDataUser() {
    const starCountRef = ref(database, "users/");
    onValue(starCountRef, (snapshot) => {
      let array = [];
      snapshot.forEach(function (childSnapshot) {
        const childData = childSnapshot.val();
        array.push({
          id: childSnapshot.key,
          name: childData.name,
          phone: childData.phone,
        });
      });
      array.map((item) => {
        return item.phone;
      });
    });
  },
};

export default AuthAPI;
