import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD4Xyns7UrdgW2Xdyr3M1Zw2u5e4QDhCII",
  authDomain: "myreactappexersice.firebaseapp.com",
  projectId: "myreactappexersice",
  storageBucket: "myreactappexersice.appspot.com",
  messagingSenderId: "434549029463",
  appId: "1:434549029463:web:f0c043682c55d81b018112"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;