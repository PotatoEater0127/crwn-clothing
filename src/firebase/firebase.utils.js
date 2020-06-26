import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC9GhjDzy3gnnCNIBNxqlbrvN4xCu4g1EI",
  authDomain: "crwn-db-a6f64.firebaseapp.com",
  databaseURL: "https://crwn-db-a6f64.firebaseio.com",
  projectId: "crwn-db-a6f64",
  storageBucket: "crwn-db-a6f64.appspot.com",
  messagingSenderId: "811526194600",
  appId: "1:811526194600:web:2f090b4b5f76c611ed899d",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
