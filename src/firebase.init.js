// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVOlBX7qkmeYQ5xe8X1AZnFa6uQlTdky8",
  authDomain: "startechbd-computer.firebaseapp.com",
  projectId: "startechbd-computer",
  storageBucket: "startechbd-computer.appspot.com",
  messagingSenderId: "975249406618",
  appId: "1:975249406618:web:99b6da10dba84c431c3d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;