import firebase from "firebase";


const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyA1YKEF3pCNvOD-KVqveLTuPwukemI6vGc",
        authDomain: "clone-58761.firebaseapp.com",
        projectId: "clone-58761",
        storageBucket: "clone-58761.appspot.com",
        messagingSenderId: "942744126764",
        appId: "1:942744126764:web:58435630317c8494a6d889",
        measurementId: "G-26MMXQVH6Y",
 
});

const auth = firebase.auth();

export {auth};