// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-27fda.firebaseapp.com",
  projectId: "fir-27fda",
  storageBucket: "fir-27fda.appspot.com",
  messagingSenderId: "679906469129",
  appId: "1:679906469129:web:8fe7dc69c2817c3209dfd8",
  measurementId: "G-X614EBQ46S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)