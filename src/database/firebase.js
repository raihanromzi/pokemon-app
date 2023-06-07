// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4OeFbzwDc8AwEnHUzczdcbJOmEUh2JfU',
  authDomain: 'pokemon-app-4b029.firebaseapp.com',
  databaseURL: 'https://pokemon-app-4b029-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'pokemon-app-4b029',
  storageBucket: 'pokemon-app-4b029.appspot.com',
  messagingSenderId: '1081634435916',
  appId: '1:1081634435916:web:818cd83f8dbbf103b1d5e9'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
