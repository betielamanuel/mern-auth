// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-23f46.firebaseapp.com",
  projectId: "mern-auth-23f46",
  storageBucket: "mern-auth-23f46.appspot.com",
  messagingSenderId: "149432028058",
  appId: "1:149432028058:web:6b8ba1158a443f3a0f4823",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
