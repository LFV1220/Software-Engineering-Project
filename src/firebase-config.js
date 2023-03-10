// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2eg0t8ETX04Kf9bBjF2fdVzgAErDwz_0",
    authDomain: "se-project-d7a09.firebaseapp.com",
    projectId: "se-project-d7a09",
    storageBucket: "se-project-d7a09.appspot.com",
    messagingSenderId: "141626919867",
    appId: "1:141626919867:web:eccd12239ffb09f88b529e",
    measurementId: "G-C2RGL0NRX3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);