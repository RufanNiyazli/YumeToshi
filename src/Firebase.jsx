// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1Zwv353C1Iq3ES6mTbGKo_rys8AbYGb0",
  authDomain: "movie-e77fe.firebaseapp.com",
  projectId: "movie-e77fe",
  storageBucket: "movie-e77fe.firebasestorage.app",
  messagingSenderId: "960681293889",
  appId: "1:960681293889:web:143a9d48cdaf017982aec0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
