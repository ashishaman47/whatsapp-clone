import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAEWNYOAhaulJ57tsRuT7gLRnukZkeXssI',
  authDomain: 'whatsapp-clone-55310.firebaseapp.com',
  databaseURL: 'https://whatsapp-clone-55310.firebaseio.com',
  projectId: 'whatsapp-clone-55310',
  storageBucket: 'whatsapp-clone-55310.appspot.com',
  messagingSenderId: '1000264817888',
  appId: '1:1000264817888:web:65d54eff4c2f47afcfc485',
  measurementId: 'G-V7HPF740TE',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// access the firestore instance of db
const db = firebase.firestore();

// authentication handler
const auth = firebase.auth();

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
