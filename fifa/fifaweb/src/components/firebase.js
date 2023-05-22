import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA9-NeqfjJruPw37mQvd0u-0zWF0UPp1IY",
  authDomain: "fifawebstudyproject.firebaseapp.com",
  projectId: "fifawebstudyproject",
  storageBucket: "fifawebstudyproject.appspot.com",
  messagingSenderId: "244892119097",
  appId: "1:244892119097:web:92c4f6e45aec6950309de8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);