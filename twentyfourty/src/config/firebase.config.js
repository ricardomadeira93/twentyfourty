// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlX-RffJIVTyqWeQQKJPYxCgOpb5Eoq_I",
  authDomain: "twentyfourty-f864f.firebaseapp.com",
  projectId: "twentyfourty-f864f",
  storageBucket: "twentyfourty-f864f.appspot.com",
  messagingSenderId: "967705811261",
  appId: "1:967705811261:web:dd9bff75476b9a58530d54",
  measurementId: "G-JQTPY1ZP00",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
