// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD3X_tjkTMMMMIhlA4tzdroFtO1VXqnyoo",
  authDomain: "visopia.firebaseapp.com",
  projectId: "visopia",
  storageBucket: "visopia.firebasestorage.app",
  messagingSenderId: "970726346444",
  appId: "1:970726346444:web:44d6b1d43923971f2d7c69",
  measurementId: "G-FZE6LH17CB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
