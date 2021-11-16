const firebase = require('firebase')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWoL7AF9TlEsstykny4c9eh-9JfYaWyZk",
  authDomain: "yollivertattoo-25189.firebaseapp.com",
  databaseURL: "https://yollivertattoo-25189-default-rtdb.firebaseio.com",
  projectId: "yollivertattoo-25189",
  storageBucket: "yollivertattoo-25189.appspot.com",
  messagingSenderId: "986866008049",
  appId: "1:986866008049:web:188b3a3f3ed50284004e50",
  measurementId: "G-TD1ZMRZGPW"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
module.exports = {
  db,
  firebase
}
