import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAeJKDVKWYKjZcBffFq6axiqEU4iNupVIo",
  authDomain: "rifas-ce773.firebaseapp.com",
  databaseURL: "https://rifas-ce773.firebaseio.com",
  projectId: "rifas-ce773",
  storageBucket: "rifas-ce773.appspot.com",
  messagingSenderId: "155210069413",
  appId: "1:155210069413:web:62b2326be467a1ccf0244c"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();