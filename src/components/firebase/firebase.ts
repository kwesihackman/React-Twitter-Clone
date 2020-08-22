import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDB3IGbYB0JkD1qma74a3tuBarGZ978AUI",
  authDomain: "devhackman-twitter.firebaseapp.com",
  databaseURL: "https://devhackman-twitter.firebaseio.com",
  projectId: "devhackman-twitter",
  storageBucket: "devhackman-twitter.appspot.com",
  messagingSenderId: "938037243625",
  appId: "1:938037243625:web:204d75baa507bd64e50a78",
  measurementId: "G-GCSPY0JKSJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
