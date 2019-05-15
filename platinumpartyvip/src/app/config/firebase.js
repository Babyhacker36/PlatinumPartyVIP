import 'firebase/firestore'
import firebase from 'firebase';



const firebaseConfig = {
    apiKey: "AIzaSyAO6MG1hZYXTnmemo8m9OuIYoaELO5cH1A",
    authDomain: "ppvip-240522.firebaseapp.com",
    databaseURL: "https://ppvip-240522.firebaseio.com",
    projectId: "ppvip-240522",
    storageBucket: "ppvip-240522.appspot.com",
    messagingSenderId: "670482589586",
    appId: "1:670482589586:web:544bcf6c46481a08"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;