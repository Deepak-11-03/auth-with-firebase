// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqAKYpB3dB5YAUSh-F0GoRLs-qFQrflMo",
  authDomain: "breezeai-fbf3f.firebaseapp.com",
  projectId: "breezeai-fbf3f",
  storageBucket: "breezeai-fbf3f.appspot.com",
  messagingSenderId: "430068638919",
  appId: "1:430068638919:web:e02c36dde3316cd5088ae2",
  measurementId: "G-320Q49EY9Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()

export {app,analytics,auth};