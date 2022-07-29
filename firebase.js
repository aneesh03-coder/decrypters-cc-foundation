import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJXPzkb5se34udz3xQEgV-jbB8iLCZj-k",
  authDomain: "coaching-call-df.firebaseapp.com",
  projectId: "coaching-call-df",
  storageBucket: "coaching-call-df.appspot.com",
  messagingSenderId: "699026691403",
  appId: "1:699026691403:web:bb11a4442757945025c4ce",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export { db };
