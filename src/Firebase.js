import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUwS_OGwFpxa04Q3v7ieELDxNWPtAP37U",
  authDomain: "disney-plus-clone-43569.firebaseapp.com",
  projectId: "disney-plus-clone-43569",
  storageBucket: "disney-plus-clone-43569.appspot.com",
  messagingSenderId: "979822742341",
  appId: "1:979822742341:web:8bd6f44734e527416c0c2c",
  measurementId: "G-01YNBXVDWR"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;