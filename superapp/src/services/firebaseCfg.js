import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLBM-L8gJivP57eDqRvoOMr7Rta43m6wE",
  authDomain: "superapp-2d53b.firebaseapp.com",
  databaseURL: "https://superapp-2d53b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "superapp-2d53b",
  storageBucket: "superapp-2d53b.appspot.com",
  messagingSenderId: "620112801620",
  appId: "1:620112801620:web:6e0559a6c700e7af3ce2c1"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;