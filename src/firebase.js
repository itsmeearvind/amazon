import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDf0N1KK9ikaoFqxPK3zUQzngdmCYurE40",
  authDomain: "fir-ebbc0.firebaseapp.com",
  projectId: "fir-ebbc0",
  storageBucket: "fir-ebbc0.appspot.com",
  messagingSenderId: "74621409161",
  appId: "1:74621409161:web:c59e3f16f80f88789af358",
  measurementId: "G-V5E5XYG9Z1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
