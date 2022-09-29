// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlDvCeRj3pQxDNaCZyJ3JZvdoqV-qR6zc",
  authDomain: "auth-cf397.firebaseapp.com",
  projectId: "auth-cf397",
  storageBucket: "auth-cf397.appspot.com",
  messagingSenderId: "22789114264",
  appId: "1:22789114264:web:18b5467910b117285f43ed",
  measurementId: "G-ME0Q8X51B3",
  databaseURL: "https://auth-cf397-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
