import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import firebase from "firebase/compat/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgDJ521L1ErJ8kjJFu5DATdpSvAaMwfhs",
  authDomain: "property-pro-8b516.firebaseapp.com",
  projectId: "property-pro-8b516",
  storageBucket: "property-pro-8b516.appspot.com",
  messagingSenderId: "434256168536",
  appId: "1:434256168536:web:51b2ea000ca30e2c232c2d",
  measurementId: "G-150L085EHK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </UserProvider>
);
