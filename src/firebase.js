import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
// keys in txt file
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

firestore.settings({ timestampsInSnapshots: true });

window.firebase = firebase;

export default firebase;