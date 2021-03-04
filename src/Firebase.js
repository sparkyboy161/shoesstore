import firebase from 'firebase';
import 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "shoesstore-aef08.firebaseapp.com",
    projectId: "shoesstore-aef08",
    storageBucket: "shoesstore-aef08.appspot.com",
    messagingSenderId: "499724989567",
    appId: "1:499724989567:web:4f4849e7a8c2060c25bb4a",
    measurementId: "G-PZHHWN545X"
};
firebase.initializeApp(config);
firebase.analytics();

firebase.firestore().settings(settings);

export const db = firebase.firestore();

export default firebase;