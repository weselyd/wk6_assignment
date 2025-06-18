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

/*
// Sign Up
function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Signed up:', userCredential.user);
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
} */

// Sign In
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

// Sign Out
export function logOut() {
  auth.signOut().then(() => {
    console.log('Signed out');
    alert("Logged out!");
  });
}

// Monitor Auth State
auth.onAuthStateChanged((user) => {
  if (user) {
    authForm.style.display = 'none';
    userInfo.style.display = 'block';
    userEmail.textContent = user.email;
  } else {
    authForm.style.display = 'block';
    userInfo.style.display = 'none';
    errorMessage.textContent = '';
  }
});

