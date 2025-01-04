// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjOVv5SmCv6mOJVdKhXk4ZwPzrMX2UeIQ",
  authDomain: "visa-navigator-d47f9.firebaseapp.com",
  projectId: "visa-navigator-d47f9",
  storageBucket: "visa-navigator-d47f9.firebasestorage.app",
  messagingSenderId: "995183468589",
  appId: "1:995183468589:web:1871d70f31544634d798a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth