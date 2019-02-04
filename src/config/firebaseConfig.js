import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCNTIsCU6cb6nfpg2kwpYX-YXoHlJ14ioA",
  authDomain: "react-redux-firebase-67bb5.firebaseapp.com",
  databaseURL: "https://react-redux-firebase-67bb5.firebaseio.com",
  projectId: "react-redux-firebase-67bb5",
  storageBucket: "react-redux-firebase-67bb5.appspot.com",
  messagingSenderId: "853883243330"
};

firebase.initializeApp(config);

export default firebase;