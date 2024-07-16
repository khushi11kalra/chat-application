// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-d4262.firebaseapp.com",
  projectId: "reactchat-d4262",
  storageBucket: "reactchat-d4262.appspot.com",
  messagingSenderId: "1097632700243",
  appId: "1:1097632700243:web:2d1e58acaddeface2033a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth();
export const db= getFirestore();
export const storage=getStorage();