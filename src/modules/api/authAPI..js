import {
  getDatabase,
  ref,
  set,
  child,
  push,
  update,
  get,
  onValue,
} from "firebase/database";
import "firebase/firestore";
import "firebase/auth";
import { database, firebase } from "../../../config";
import API_ROUTES from "./apiRoutes";
import { useState } from "react";

// const db = firebase.database();

const randomID = Math.floor(Math.random() * 10000000) + 999999;
const AuthAPI = {
  createUser() {
    // let key = db.ref(API_ROUTES.user).push().key;
    set(ref(database, API_ROUTES.user + randomID), {
      name: "Tran Quyen",
      email: "quyentran.02062000@gmail.com",
      password: "123",
      timesFrees: 5,
      timesExchanges: 5,
      coins: 500,
      collections: {
        phuc: 4,
        loc: 3,
        tho: 5,
      },
      gift: [
        {
          name_gift: "Pepsi Cap",
          quantity: 2,
        },
        {
          name_gift: "Pepsi Jacket",
          quantity: 5,
        },
      ],
    });
  },
};

export default AuthAPI;
