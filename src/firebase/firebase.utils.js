import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCt59C739g57YIFH8ZYyS8ycXHmGYjIvMY",
  authDomain: "crwn-db-246d2.firebaseapp.com",
  databaseURL: "https://crwn-db-246d2.firebaseio.com",
  projectId: "crwn-db-246d2",
  storageBucket: "crwn-db-246d2.appspot.com",
  messagingSenderId: "121965847650",
  appId: "1:121965847650:web:af7fd28797eebde7d41d3b",
  measurementId: "G-FCGGB40FDJ"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;