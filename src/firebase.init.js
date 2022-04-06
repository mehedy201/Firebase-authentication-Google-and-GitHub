// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEHT5Pb_BHdlEeG8vm1FWpTN1fkm2GjGA",
  authDomain: "fi-au-g-and-g1.firebaseapp.com",
  projectId: "fi-au-g-and-g1",
  storageBucket: "fi-au-g-and-g1.appspot.com",
  messagingSenderId: "157232375865",
  appId: "1:157232375865:web:79c6004afddf66fd6b45e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;