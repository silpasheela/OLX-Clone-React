import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyB5ZGfZKImC8ckXKGTRsaEZs9Ti6kkhEWY",
    authDomain: "olx-clone-ce9aa.firebaseapp.com",
    projectId: "olx-clone-ce9aa",
    storageBucket: "olx-clone-ce9aa.appspot.com",
    messagingSenderId: "342323488104",
    appId: "1:342323488104:web:ad03569ec41a59108d62dd",
    measurementId: "G-S6HTMYVKV5"
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth(Firebase)
export const db = getFirestore(Firebase)    
export const storage = getStorage(Firebase)