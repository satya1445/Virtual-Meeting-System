import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDflzyzDM1nmd1TT4uJHF6aKJNuVWKCj-0",
    authDomain: "giet-classroom-ec587.firebaseapp.com",
    projectId: "giet-classroom-ec587",
    storageBucket: "giet-classroom-ec587.appspot.com",
    messagingSenderId: "85684173191",
    appId: "1:85684173191:web:7c6656b328dd27a0e5fb22",
    measurementId: "G-CJ1H4FCMMH"
}


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage }
export default db;