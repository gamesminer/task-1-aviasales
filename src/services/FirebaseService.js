import { initializeApp } from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArforO5vSGylgGO4BK0vkxtuT1Mu5Sjck",
  authDomain: "tz-aviasales.firebaseapp.com",
  databaseURL: "https://tz-aviasales.firebaseio.com",
  projectId: "tz-aviasales",
  storageBucket: "",
  messagingSenderId: "322434351956",
  appId: "1:322434351956:web:1ea8b738c50d2c88"
};

export const FirebaseService = initializeApp(config);