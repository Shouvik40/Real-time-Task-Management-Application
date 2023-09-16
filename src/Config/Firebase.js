// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeVCZFh2k2Qn20QL_qXddZK-Tpa7z0tbM",
  authDomain: "task-management-applicat-535cb.firebaseapp.com",
  projectId: "task-management-applicat-535cb",
  storageBucket: "task-management-applicat-535cb.appspot.com",
  messagingSenderId: "652843947244",
  appId: "1:652843947244:web:65a880cc1fd7b87ff381c9",
  measurementId: "G-3CYHSLH2PE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
