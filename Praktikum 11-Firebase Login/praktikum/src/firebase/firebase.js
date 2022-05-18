import firebase from 'firebase/compat/app';
// import "firebase/auth";
// import "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9v0y6x6H3l0ki6Qljkk3g_E7arlUQXFE",
  authDomain: "modul11-pbf-298e8.firebaseapp.com",
  projectId: "modul11-pbf-298e8",
  storageBucket: "modul11-pbf-298e8.appspot.com",
  messagingSenderId: "1071807158544",
  appId: "1:1071807158544:web:d2aab6f861cdd57c7b2d95"
};
export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;