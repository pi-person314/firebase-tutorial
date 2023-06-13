import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAJErfkXubuvV2O31YPSsZzr3T3JZsKQvc",
  authDomain: "fir-tutorial-1c023.firebaseapp.com",
  projectId: "fir-tutorial-1c023",
  storageBucket: "fir-tutorial-1c023.appspot.com",
  messagingSenderId: "330215390771",
  appId: "1:330215390771:web:9923a1d92168bd16cf6d46",
  measurementId: "G-TL4T3E4FGM",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);
