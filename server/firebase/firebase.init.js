const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHfX2VmuMYEHmyMk6gnH01Rk5m6xSfXHI",
  authDomain: "esetech-coding-challenge-13fb6.firebaseapp.com",
  projectId: "esetech-coding-challenge-13fb6",
  storageBucket: "esetech-coding-challenge-13fb6.appspot.com",
  messagingSenderId: "883514773414",
  appId: "1:883514773414:web:c68b4ffdbaf476b446c967",
  measurementId: "G-M186Z8Q3M8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

module.exports = { app, auth, db };
