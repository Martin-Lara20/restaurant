import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBkQn-Bun2_PJTPfk_AtJE4s9UHbnL5BH8",
    authDomain: "prorest-6e29c.firebaseapp.com",
    projectId: "prorest-6e29c",
    storageBucket: "prorest-6e29c.appspot.com",
    messagingSenderId: "545649238946",
    appId: "1:545649238946:web:46ba12f08daae959c948fb"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)