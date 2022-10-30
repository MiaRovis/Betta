import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAeDerDiKMT4RE-Oq0-UifIRPs5xzVJr_A",
    authDomain: "shumpoo-8aba4.firebaseapp.com",
    projectId: "shumpoo-8aba4",
    storageBucket: "shumpoo-8aba4.appspot.com",
    messagingSenderId: "975868837988",
    appId: "1:975868837988:web:0406c2c878fe537798df71"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
  let storage = firebase.storage();

  export { 
    firebase, db, storage 
};