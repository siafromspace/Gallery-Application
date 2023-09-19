import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAl0v_h2VQBKL68WHurE3CSI7UpCnYuORo",
    authDomain: "image-gallery-9dc7a.firebaseapp.com",
    projectId: "image-gallery-9dc7a",
    storageBucket: "image-gallery-9dc7a.appspot.com",
    messagingSenderId: "663324525010",
    appId: "1:663324525010:web:1a502b6c95d8b4f74e880b",
    measurementId: "G-JEC061L91P"
  };

const app = initializeApp(firebaseConfig);
const imgDB = getStorage(app)
const txtDB = getFirestore(app)
const auth = getAuth()

export {imgDB, txtDB, auth, signInWithEmailAndPassword};