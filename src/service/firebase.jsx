// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOcvEC_WuXCG9hZg5Ni5HRnsIX8Qa9rzA",
  authDomain: "melek-f3b93.firebaseapp.com",
  projectId: "melek-f3b93",
  storageBucket: "melek-f3b93.firebasestorage.app",
  messagingSenderId: "877063035837",
  appId: "1:877063035837:web:700be3a2a2974ef1bbd0d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);