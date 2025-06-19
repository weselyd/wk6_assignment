import { displayLoggedInUi } from './ui.js';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrG4DzOojRjZBSXZffJwQIBcq5SZZHEJQ",  // FIREBASE_APIKEY
    authDomain: "week6auth-9092f.firebaseapp.com",  // FIREBASE_AUTHDOMAIN
    projectId: "week6auth-9092f",  // FIREBASE_PROJECTID
    storageBucket: "week6auth-9092f.firebasestorage.app",  // FIREBASE_STORAGEBUCKET
    messagingSenderId: "14927876209",  // FIREBASE_MESSAGINGSENDERID
    appId: "1:14927876209:web:d2838153380a9e6b088bd0"  // FIREBASE_APPID
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// DOM elements
const authContainer = document.getElementById('auth-container');
const userInfo = document.getElementById('user-info');
const userEmail = document.getElementById('user-email');
const authForm = document.getElementById('auth-form');
const errorMessage = document.getElementById('error-message');

// Monitor auth state and update UI as needed
auth.onAuthStateChanged((user) => {
  if (user) {
    authForm.style.display = 'none';
    userInfo.style.display = 'block';
    displayLoggedInUi(user);
  } else {
    authForm.style.display = 'block';
    userInfo.style.display = 'none';
    errorMessage.textContent = '';
    displayLoggedInUi(null);
  }
});

// Sign In with Firebase
export function signIn() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Signed in:', userCredential.user);
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
}

// Sign Out from Firebase
export function logOut() {
  auth.signOut().then(() => {
    console.log('Signed out');
  });
}

// Get Firebase ID Token
export function getIdToken() {
  const user = firebase.auth().currentUser;
  if (user) {
    return user.getIdToken(/* forceRefresh */ false)
      .then((idToken) => {
        console.log('Firebase ID Token:', idToken);
        return idToken;
      })
      .catch((error) => {
        console.error('Error getting ID Token:', error);
        throw error;
      });
  } else {
    console.log('No user is signed in');
    return Promise.reject('No user signed in');
  }
}