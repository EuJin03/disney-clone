import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDu-6hXTy0S9jiNcJnbdlqLW49gj3g5uSo",
  authDomain: "disneyplus-88692.firebaseapp.com",
  projectId: "disneyplus-88692",
  storageBucket: "disneyplus-88692.appspot.com",
  messagingSenderId: "564325409696",
  appId: "1:564325409696:web:6a321fa42bc4b3cf593ac5",
  measurementId: "G-YZ2W1498KZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
