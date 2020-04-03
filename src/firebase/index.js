import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCf_jB-MURnBsRWVqnnXLNtVHXJ1lcWfd0",
    authDomain: "candidateform-6cb6c.firebaseapp.com",
    databaseURL: "https://candidateform-6cb6c.firebaseio.com",
    projectId: "candidateform-6cb6c",
    storageBucket: "candidateform-6cb6c.appspot.com",
    messagingSenderId: "1072702990977",
    appId: "1:1072702990977:web:41fa5b42b08eb989677b80"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}