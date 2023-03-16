// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjL0y2LzWOP4my-5ovY5Lz3GeWxjdl9dA",
  authDomain: "example-chat-d3c3a.firebaseapp.com",
  projectId: "example-chat-d3c3a",
  storageBucket: "example-chat-d3c3a.appspot.com",
  messagingSenderId: "892691729928",
  appId: "1:892691729928:web:5a9af4f0d1e91aa0e64bbd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);