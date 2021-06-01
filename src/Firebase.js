import firebase from 'firebase';
import 'firebase/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_kGuVudwx8-V3sCUxIFyEERDY_v7KnJg",
    authDomain: "expense-tracker-5c478.firebaseapp.com",
    projectId: "expense-tracker-5c478",
    storageBucket: "expense-tracker-5c478.appspot.com",
    messagingSenderId: "157076444858",
    appId: "1:157076444858:web:a172c43e1a2dac842bd483",
    measurementId: "G-X0MZHT582X"
  };
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
export default db;