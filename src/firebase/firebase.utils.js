import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEjCt41SPTcwIaIoCh_Px_F5cvB6ZM6vs",
  authDomain: "crwn-db-96d09.firebaseapp.com",
  databaseURL: "https://crwn-db-96d09.firebaseio.com",
  projectId: "crwn-db-96d09",
  storageBucket: "crwn-db-96d09.appspot.com",
  messagingSenderId: "284085529545",
  appId: "1:284085529545:web:a74a12ad9685c971ff1618",
  measurementId: "G-9G9KT6RR0W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
