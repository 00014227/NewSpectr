// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBcjsbzbLmoWJfDRyFGy7zPB3FZuAJ3RLE",
    authDomain: "spectr-b776a.firebaseapp.com",
    projectId: "spectr-b776a",
    storageBucket: "spectr-b776a.appspot.com",
    messagingSenderId: "778081706845",
    appId: "1:778081706845:web:6da0a840487dfba54a3eb4",
    measurementId: "G-WTR3JB9ZTH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };