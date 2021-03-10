import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// firebase config. TODO: these details will add the environment file on production
const firebaseConfig = {
    apiKey: "AIzaSyDrW9HYx_eXR4aKAdyS7TIIVRxPt564-UQ",
    authDomain: "signauth-react.firebaseapp.com",
    projectId: "signauth-react",
    storageBucket: "signauth-react.appspot.com",
    messagingSenderId: "1036840887547",
    appId: "1:1036840887547:web:3a73c2b27173e57099bc5e",
    measurementId: "G-NB6ZHFN1Y1"
  };

  //it will initialize the firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();


//activated google auth provider on firebase
export const provider = new firebase.auth.GoogleAuthProvider();

//in this function call the google sign in popup window
export const signInWithGoogle = (event) => {
  event.preventDefault();
  auth.signInWithPopup(provider)
};



export const googlesignout = () => {
  auth.signOut();
};

// export default {auth};