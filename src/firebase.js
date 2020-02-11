import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6YY90TQ4suWVYPLPZO3funXg8QUqiCi0",
  authDomain: "thinkpiece-220c8.firebaseapp.com",
  databaseURL: "https://thinkpiece-220c8.firebaseio.com",
  projectId: "thinkpiece-220c8",
  storageBucket: "thinkpiece-220c8.appspot.com",
  messagingSenderId: "215023684234",
  appId: "1:215023684234:web:5f1f3aa3633baee32f7b73",
  measurementId: "G-BSS4356MP5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

const settings = { /* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);

window.firebase = firebase;

export default firebase;
