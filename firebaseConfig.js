// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2CxyUscVncM3yimwhe1HdcoAU52WM4UQ",
  authDomain: "fs-app-d8b28.firebaseapp.com",
  projectId: "fs-app-d8b28",
  storageBucket: "fs-app-d8b28.firebasestorage.app",
  messagingSenderId: "130773511969",
  appId: "1:130773511969:web:c8ff9e8fcb995e9da09860",
  measurementId: "G-WW8J1SQ2MT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);