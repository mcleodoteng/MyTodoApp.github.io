// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx4_jwpPBw_yu8gT2B2feli7W8igFea-0",
  authDomain: "todoapp-2b33e.firebaseapp.com",
  projectId: "todoapp-2b33e",
  storageBucket: "todoapp-2b33e.appspot.com",
  messagingSenderId: "107372581441",
  appId: "1:107372581441:web:2c0807ab090d1dae542cc0",
  measurementId: "G-B975294NES",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
