
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBd6tkM_TdUesw9iZsmCR4HS5-Xsmp1kLg",
  authDomain: "hc-prueba-ab65d.firebaseapp.com",
  databaseURL: "https://hc-prueba-ab65d-default-rtdb.firebaseio.com",
  projectId: "hc-prueba-ab65d",
  storageBucket: "hc-prueba-ab65d.appspot.com",
  messagingSenderId: "331244782277",
  appId: "1:331244782277:web:a0dc18c3c7fd8ece22e6ac"

};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence()
});

