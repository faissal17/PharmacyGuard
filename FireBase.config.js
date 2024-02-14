// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA34kVw6FkSnJVZsbxp-WMzUgEBAKJ45ZI',
  authDomain: 'reactnativeapp-b5996.firebaseapp.com',
  projectId: 'reactnativeapp-b5996',
  storageBucket: 'reactnativeapp-b5996.appspot.com',
  messagingSenderId: '649470326086',
  appId: '1:649470326086:web:1088bda069721024252147',
};

// Initialize Firebase Auth
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIREBASE_APP = app;
export const FIREBASE_AUTH = auth;
