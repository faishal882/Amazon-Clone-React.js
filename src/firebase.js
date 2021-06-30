import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1MS8DOrguGPZCEARmlJbQ0NePXUCH4iQ",
    authDomain: "clone-c64ee.firebaseapp.com",
    projectId: "clone-c64ee",
    storageBucket: "clone-c64ee.appspot.com",
    messagingSenderId: "880897478796",
    appId: "1:880897478796:web:8e51f8658a32a2a430aba9",
    measurementId: "G-19RH59WLFR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };