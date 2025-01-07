// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ__0RmpTMVmisMeubnjS4YQG_nAFj-fQ",
  authDomain: "file-sharing-app-4745b.firebaseapp.com",
  projectId: "file-sharing-app-4745b",
  storageBucket: "file-sharing-app-4745b.firebasestorage.app",
  messagingSenderId: "1094754572108",
  appId: "1:1094754572108:web:8db526450c0127b77f61e9",
  measurementId: "G-P1HNZYKP2N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
