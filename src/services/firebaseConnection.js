import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBVoGRPaGu8t51XwFZBzJK8VtPns7tvZIM",
    authDomain: "up-minor.firebaseapp.com",
    projectId: "up-minor",
    storageBucket: "up-minor.appspot.com",
    messagingSenderId: "165680053760",
    appId: "1:165680053760:web:671423556e3acd977422e5",
    measurementId: "G-EBLFV23RWK",
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export default firebase;
