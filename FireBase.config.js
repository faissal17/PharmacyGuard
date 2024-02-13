// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA34kVw6FkSnJVZsbxp-WMzUgEBAKJ45ZI',
  authDomain: 'reactnativeapp-b5996.firebaseapp.com',
  projectId: 'reactnativeapp-b5996',
  storageBucket: 'reactnativeapp-b5996.appspot.com',
  messagingSenderId: '649470326086',
  appId: '1:649470326086:web:1088bda069721024252147',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
