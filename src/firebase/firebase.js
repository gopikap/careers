import app from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/database';

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

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth       = app.auth();
        this.db         = app.database();
        this.storage    = app.storage();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.doSignOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

}

export default Firebase;