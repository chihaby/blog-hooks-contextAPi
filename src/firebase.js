import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyA3C2ip511tOPc1_DfVU9MNrlIpCeFbmWQ",
    authDomain: "think-piece-live-dc187.firebaseapp.com",
    databaseURL: "https://think-piece-live-dc187.firebaseio.com",
    projectId: "think-piece-live-dc187",
    storageBucket: "think-piece-live-dc187.appspot.com",
    messagingSenderId: "741248823364",
    appId: "1:741248823364:web:607654ee68ff0e6a608c11",
    measurementId: "G-QW2K7QF1QG"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;