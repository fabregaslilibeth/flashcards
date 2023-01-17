// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdIlNqkh1kEZdcrkDBVrIHTl57mOWaY_Q",
  authDomain: "myapp-bd248.firebaseapp.com",
  projectId: "myapp-bd248",
  storageBucket: "myapp-bd248.appspot.com",
  messagingSenderId: "278681731149",
  appId: "1:278681731149:web:6d9d808a1e61b144d8dc04",
  measurementId: "G-DQ649MS1T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);
export const firebaseAuth = getAuth(app);