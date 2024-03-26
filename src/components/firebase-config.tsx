// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8gz0J07Vc9vGKZJ-Ke-YNC1qsZm6Aj2U",
    authDomain: "leetbook-32c2f.firebaseapp.com",
    databaseURL: "https://leetbook-32c2f-default-rtdb.firebaseio.com",
    projectId: "leetbook-32c2f",
    storageBucket: "leetbook-32c2f.appspot.com",
    messagingSenderId: "908293212798",
    appId: "1:908293212798:web:3f5b3c675ce8106c9c262f",
    measurementId: "G-7JW7JQ3Y66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);