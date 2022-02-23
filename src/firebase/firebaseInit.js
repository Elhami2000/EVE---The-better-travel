//secili antar duhet me kriju keto vet
import firebase from "firebase/app";
import "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCM6m9PzWyn0BCkJV8J76LiSJoBXASdz8k",
  authDomain: "fireeve-cbdfe.firebaseapp.com",
  projectId: "fireeve-cbdfe",
  storageBucket: "fireeve-cbdfe.appspot.com",
  messagingSenderId: "538842606585",
  appId: "1:538842606585:web:18c1d9ddee052d2fe7eb28"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();