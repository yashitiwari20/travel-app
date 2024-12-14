// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKmv4wBrBfM6r0uzPFsvrVyK-FziPicGU",
  authDomain: "travel-app-c0896.firebaseapp.com",
  projectId: "travel-app-c0896",
  storageBucket: "travel-app-c0896.appspot.com",
  messagingSenderId: "41208881819",
  appId: "1:41208881819:web:c2aa8d43b0b0793dea9c3e",
  measurementId: "G-KLBR3ND93Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
