import * as firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLSLQCSoHJoAB1_5kHGr4NHoF9Jo_qtMc",
  authDomain: "expensify-f524c.firebaseapp.com",
  projectId: "expensify-f524c",
  storageBucket: "expensify-f524c.appspot.com",
  messagingSenderId: "108260924023",
  appId: "1:108260924023:web:a2621f2788eea81db94472",
  measurementId: "G-NM5ZRW7GEV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.database().ref().set({
  name: 'Tyler Jones'
});