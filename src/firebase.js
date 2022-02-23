import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB7tzvFRll4o4VkW_5PRiPcuT_oD34P-W0",
    authDomain: "ecommerce-app-6f9f7.firebaseapp.com",
    projectId: "ecommerce-app-6f9f7",
    storageBucket: "ecommerce-app-6f9f7.appspot.com",
    messagingSenderId: "447931116437",
    appId: "1:447931116437:web:d5412fb6b746a325cae49c",
    measurementId: "G-8JQX8X32PC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export  {db,auth}; 