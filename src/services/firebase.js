import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB51PRQTOZBQX14_Uxp1EAY8w_0a6lUvr0",
  authDomain: "otj4-testi1.firebaseapp.com",
  databaseURL:
    "https://otj4-testi1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "otj4-testi1",
  storageBucket: "otj4-testi1.appspot.com",
  messagingSenderId: "646569596469",
  appId: "1:646569596469:web:e8bed452d3e8757d8d437c",
};

const app = firebase.initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export const auth = firebase.auth();

/*
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
*/
