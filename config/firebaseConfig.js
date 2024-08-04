// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "micro-loop.firebaseapp.com",
  projectId: "micro-loop",
  storageBucket: "micro-loop.appspot.com",
  messagingSenderId: "741857817442",
  appId: "1:741857817442:web:da49a8722b5b0c3842f23b",
  measurementId: "G-ZYQVJVJ03H"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
const analytics = getAnalytics(app);