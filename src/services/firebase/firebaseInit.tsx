// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVOBta-Dk_rXCUu2-bY-JLJ5kniGs3FbY",
  authDomain: "api-evoppass-dev.firebaseapp.com",
  databaseURL: "https://api-evoppass-dev-default-rtdb.firebaseio.com",
  projectId: "api-evoppass-dev",
  storageBucket: "api-evoppass-dev.appspot.com",
  messagingSenderId: "707600038525",
  appId: "1:707600038525:web:00798c990798cf60ef8f14",
  measurementId: "G-GBE92LEJNJ"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp