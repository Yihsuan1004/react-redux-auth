import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var config = {
    apiKey: "AIzaSyBF__QWD3cmPdhg8Pz4EXg5svUWpwgs-mo",
    authDomain: "react-authenntication.firebaseapp.com",
    projectId: "react-authenntication",
    storageBucket: "react-authenntication.appspot.com",
    messagingSenderId: "154530069678",
    appId: "1:154530069678:web:ae6fe1169e9ef128ebc13f",
    measurementId: "G-VYNKEZBCX1"
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;