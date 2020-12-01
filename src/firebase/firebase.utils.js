import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB-dv2xpYCIDvZ0yrnjpgN5UNq01cprpPg",
  authDomain: "crwn-db-ed39b.firebaseapp.com",
  databaseURL: "https://crwn-db-ed39b.firebaseio.com",
  projectId: "crwn-db-ed39b",
  storageBucket: "crwn-db-ed39b.appspot.com",
  messagingSenderId: "446993729097",
  appId: "1:446993729097:web:d231c90026463c0ed6a198",
  measurementId: "G-NLC8VKGMSG"
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;