// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import .meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-11063.firebaseapp.com",
  projectId: "mern-estate-11063",
  storageBucket: "mern-estate-11063.appspot.com",
  messagingSenderId: "293671450681",
  appId: "1:293671450681:web:9f1ea0ef586f591539f5e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);