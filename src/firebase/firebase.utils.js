import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD7MhHwORHABc8EgkeUnVzUJbhpGV5zHV0",
  authDomain: "crwn-db-ff58b.firebaseapp.com",
  databaseURL: "https://crwn-db-ff58b.firebaseio.com",
  projectId: "crwn-db-ff58b",
  storageBucket: "crwn-db-ff58b.appspot.com",
  messagingSenderId: "1084124742134",
  appId: "1:1084124742134:web:2633437cee5b093c9147d7",
  measurementId: "G-B53ZD9RMV1"
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