import Firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config ={
    apiKey: "AIzaSyDWtgFLlyBIN1KO79Heo14JateLPGgKZkU",
    authDomain: "netflix-clone-7f2c5.firebaseapp.com",
    projectId: "netflix-clone-7f2c5",
    storageBucket: "netflix-clone-7f2c5.appspot.com",
    messagingSenderId: "1069310782927",
    appId: "1:1069310782927:web:5aa8eb0ae0331a14ecb6ba"
}

const firebase = Firebase.initializeApp(config);


export { firebase };
