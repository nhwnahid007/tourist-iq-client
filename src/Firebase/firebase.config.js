// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLQoaru9Hl8tQDhhIpR6UdVqfzKL2RRQM",
  authDomain: "tourist-iq.firebaseapp.com",
  projectId: "tourist-iq",
  storageBucket: "tourist-iq.appspot.com",
  messagingSenderId: "81478869515",
  appId: "1:81478869515:web:d4eb00d0e969ded6905d0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;