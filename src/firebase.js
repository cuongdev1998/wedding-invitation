import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyCStnVPBsl4K6bAufhq1DLTiCmbAWJdOkI",
    authDomain: "contact-wedding.firebaseapp.com",
    databaseURL: "https://contact-wedding-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-wedding",
    storageBucket: "contact-wedding.appspot.com",
    messagingSenderId: "1003972913097",
    appId: "1:1003972913097:web:160ea1da287df20231ea18",
    measurementId: "G-BCP7WMMKCQ"
  };
  

  firebase.initializeApp(firebaseConfig)

  export const dataRef = firebase.database();
  export default firebase