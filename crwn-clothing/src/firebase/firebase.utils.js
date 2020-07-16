import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBHhaRDYWLvaamhJpmALo5f0s9ahIihy0I",
  authDomain: "crown-db-939fa.firebaseapp.com",
  databaseURL: "https://crown-db-939fa.firebaseio.com",
  projectId: "crown-db-939fa",
  storageBucket: "crown-db-939fa.appspot.com",
  messagingSenderId: "427387201386",
  appId: "1:427387201386:web:e2ec62f9929cdf8786a713",
  measurementId: "G-LRGBT59CB7",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
