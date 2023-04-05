/* global firebase */

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// this probaly should use .env variables?
const firebaseConfig = {
  apiKey: "AIzaSyBKZGs-AYq1fdKdR88UwKw_vbulBsgzQDk",

  authDomain: "pokemon-forum-47afd.firebaseapp.com",

  projectId: "pokemon-forum-47afd",

  storageBucket: "pokemon-forum-47afd.appspot.com",

  messagingSenderId: "450310409059",

  appId: "1:450310409059:web:51ac404628cd3560a0a156",

  measurementId: "G-08ZWJWQGC4",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

//const analytics = getAnalytics(app);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
