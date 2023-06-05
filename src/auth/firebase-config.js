import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBi7MTVeepc8nVeis75DCKrUZXjF_drhPE",
    authDomain: "fir-project-12de6.firebaseapp.com",
    projectId: "fir-project-12de6",
    storageBucket: "fir-project-12de6.appspot.com",
    messagingSenderId: "398963491539",
    appId: "1:398963491539:web:480a5cd25c925335a48a26"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app) ;