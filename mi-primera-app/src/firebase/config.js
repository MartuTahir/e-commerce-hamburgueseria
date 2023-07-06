// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmkkejJU6tgDLTncLb6xQ_tf19QqQ6-M",
  authDomain: "hamburgueseria-44244.firebaseapp.com",
  projectId: "hamburgueseria-44244",
  storageBucket: "hamburgueseria-44244.appspot.com",
  messagingSenderId: "1029237680152",
  appId: "1:1029237680152:web:126e9e245e05605f44bb6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)