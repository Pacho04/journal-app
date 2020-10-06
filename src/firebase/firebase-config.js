import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBy7xQL3l7rO0SaBZdM3T8VOgpc8iCOkks",
    authDomain: "react-app-cursos-b1c8b.firebaseapp.com",
    databaseURL: "https://react-app-cursos-b1c8b.firebaseio.com",
    projectId: "react-app-cursos-b1c8b",
    storageBucket: "react-app-cursos-b1c8b.appspot.com",
    messagingSenderId: "912048145420",
    appId: "1:912048145420:web:efbd828192156629985a29"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}

