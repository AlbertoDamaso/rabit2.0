import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDCbP6Buq1nS4hxKSvdT4MPNWuP4zt9j4Y",
    authDomain: "rabit2-6b330.firebaseapp.com",
    databaseURL: "https://rabit2-6b330-default-rtdb.firebaseio.com",
    projectId: "rabit2-6b330",
    storageBucket: "rabit2-6b330.appspot.com",
    messagingSenderId: "298291900301",
    appId: "1:298291900301:web:2e99d689ea3ca0909057c4",
    measurementId: "G-CC53CVTFYD"
};

if(!firebase.apps.length){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase;