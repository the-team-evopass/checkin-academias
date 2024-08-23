import { initializeApp, FirebaseApp } from "firebase/app";

let environment = process.env.NODE_ENV?.trim();

if (environment !== 'prod' && environment !== 'hmg') {
  environment = 'prod';
}

const firebaseHMGConfig = {
  apiKey: "AIzaSyDVOBta-Dk_rXCUu2-bY-JLJ5kniGs3FbY",
  authDomain: "api-evoppass-dev.firebaseapp.com",
  databaseURL: "https://api-evoppass-dev-default-rtdb.firebaseio.com",
  projectId: "api-evoppass-dev",
  storageBucket: "api-evoppass-dev.appspot.com",
  messagingSenderId: "707600038525",
  appId: "1:707600038525:web:00798c990798cf60ef8f14",
  measurementId: "G-GBE92LEJNJ"
};

const firebasePRODConfig = {
  apiKey: "AIzaSyBxe8RjqIkLUZ9Q7A4Biz0PoI5tJ1XAhOA",
  authDomain: "api-evopass-d943e.firebaseapp.com",
  databaseURL: "https://api-evopass-d943e-default-rtdb.firebaseio.com",
  projectId: "api-evopass-d943e",
  storageBucket: "api-evopass-d943e.appspot.com",
  messagingSenderId: "1051627960045",
  appId: "1:1051627960045:web:a2d6c6c375b53c80bcbee4",
  measurementId: "G-9N8VF6X2G2"
};

let firebaseApp: FirebaseApp;

if (environment === 'hmg') {
  firebaseApp = initializeApp(firebaseHMGConfig);
} else {
  firebaseApp = initializeApp(firebasePRODConfig);
}

export default firebaseApp;