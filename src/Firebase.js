import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const app = firebase.initializeApp(config);
app.analytics();

app.firestore().settings(settings);

export const db = app.firestore();
export const storage = app.storage().ref();
export const auth = app.auth()

export default app;