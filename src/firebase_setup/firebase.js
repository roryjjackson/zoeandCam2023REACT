// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  // measurementId: process.env.REACT_APP_measurementId

  apiKey: "AIzaSyBV5tkhyijBjW0meqDlLUaK_wR-E55cawc",
  authDomain: "zoeandcam2023-1141e.firebaseapp.com",
  projectId: "zoeandcam2023-1141e",
  storageBucket: "zoeandcam2023-1141e.appspot.com",
  messagingSenderId: "1056581804835",
  appId: "1:1056581804835:web:5e19ed48aacb0b33552296",
  measurementId: "G-Z9WEVDYCHT"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
