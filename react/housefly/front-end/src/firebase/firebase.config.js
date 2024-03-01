import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAyk20d6W3nKmf4VGohSW9FHkbMxfeMed8",
  authDomain: "housefly-63ea9.firebaseapp.com",
  projectId: "housefly-63ea9",
  storageBucket: "housefly-63ea9.appspot.com",
  messagingSenderId: "29593970792",
  appId: "1:29593970792:web:3541994787f6988e3373dd",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const database = getDatabase(app);
const GoogleProvider = new GoogleAuthProvider();
export { app, firestore, storage, auth, database, GoogleProvider };
