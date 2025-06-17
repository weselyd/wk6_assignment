const firebaseApiKey = process.env.FIREBASE_API_KEY;
const firebaseAuthDomain = process.env.FIREBASE_AUTHDOMAIN;
const firebaseProjectId = process.env.FIREBASE_PROJECTID;
const firebaseStorageBucket = process.env.FIREBASE_STORAGEBUCKET;
const firebaseMessagingSenderId = process.env.FIREBASE_MESSAGINGSENDERID;
const firebaseAppId = process.env.FIREBASE_APPID;

// Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,  // FIREBASE_APIKEY
  authDomain: firebaseAuthDomain,  // FIREBASE_AUTHDOMAIN
  projectId: firebaseProjectId,  // FIREBASE_PROJECTID
  storageBucket: firebaseStorageBucket,  // FIREBASE_STORAGEBUCKET
  messagingSenderId: firebaseMessagingSenderId,  // FIREBASE_MESSAGINGSENDERID
  appId: firebaseAppId  // FIREBASE_APPID
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
}

// Sign In
function signIn() {
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
function logOut() {
  auth.signOut().then(() => {
    console.log('Signed out');
  });
}

// Monitor Auth State
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    authForm.style.display = 'none';
    userInfo.style.display = 'block';
    userEmail.textContent = user.email;
  } else {
    // No user is signed in
    authForm.style.display = 'block';
    userInfo.style.display = 'none';
    errorMessage.textContent = '';
  }
});

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log('Google user:', result.user);
    })
    .catch((error) => {
      errorMessage.textContent = error.message;
    });
}