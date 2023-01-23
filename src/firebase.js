// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMZoiuAfANxPKLih7pBOczm7LwlvML8bM",
  authDomain: "cryptobase-clone.firebaseapp.com",
  projectId: "cryptobase-clone",
  storageBucket: "cryptobase-clone.appspot.com",
  messagingSenderId: "347018881279",
  appId: "1:347018881279:web:bb14ced74cbeab0b1344ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;