// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB52rNV7tafs-qTzaVhbZZKR5-iMYgpwhA",
  authDomain: "evento-3324d.firebaseapp.com",
  projectId: "evento-3324d",
  storageBucket: "evento-3324d.appspot.com",
  messagingSenderId: "1057690464926",
  appId: "1:1057690464926:web:8d76ced429a0b3f914418f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;