const firebase = require('firebase')
const firebaseConfig = {
  apiKey: "AIzaSyDyqYgsuisEIc9op8PPjONSKnfCDIuHxfQ",
  authDomain: "yollivertattooshop-b1454.firebaseapp.com",
  databaseURL: "https://yollivertattooshop-b1454-default-rtdb.firebaseio.com",
  projectId: "yollivertattooshop-b1454",
  storageBucket: "yollivertattooshop-b1454.appspot.com",
  messagingSenderId: "971118742176",
  appId: "1:971118742176:web:71e755020716865822d7c5",
  measurementId: "G-V0M04SLH57"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
module.exports = {
  db,
  firebase
}