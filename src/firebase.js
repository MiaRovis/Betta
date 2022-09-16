import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyAeDerDiKMT4RE-Oq0-UifIRPs5xzVJr_A",
    authDomain: "shumpoo-8aba4.firebaseapp.com",
    projectId: "shumpoo-8aba4",
    storageBucket: "shumpoo-8aba4.appspot.com",
    messagingSenderId: "975868837988",
    appId: "1:975868837988:web:0406c2c878fe537798df71"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export { firebase, db };