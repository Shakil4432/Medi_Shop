// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2evOKgpuISdghufJfNBr8-nbZMd8OXOs",
  authDomain: "medicine-shop-auth.firebaseapp.com",
  projectId: "medicine-shop-auth",
  storageBucket: "medicine-shop-auth.appspot.com",
  messagingSenderId: "224352056329",
  appId: "1:224352056329:web:a1a522aabde53f91c834d8",
  measurementId: "G-SN7EX88NXL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
