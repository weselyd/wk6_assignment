// Listener for sign in button
export function attachSignInListener(signIn) {
  window.addEventListener('DOMContentLoaded', function() {
    const signInBtn = document.getElementById('sign-in-btn');
    if (signInBtn) {
      signInBtn.addEventListener('click', signIn);
    } else {
      console.error('Sign In button with id "sign-in-btn" not found.');
    }
  });
}
/*
// Listener for sign up button
export function attachSignUpListener(signUp) {
  window.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.getElementById('sign-up-btn');
    if (signUpBtn) {
      signUpBtn.addEventListener('click', signUp);
    } else {
      console.error('SignUp button with id "sign-up-btn" not found.');
    }
  });
} */
// Listener for sign up button
/*export function signInWithGoogleListener(signInWithGoogle) {
  window.addEventListener('DOMContentLoaded', function() {
    const signInWithGoogleBtn = document.getElementById('google-sign-in-btn');
    if (signInWithGoogleBtn) {
      signInWithGoogleBtn.addEventListener('click', signInWithGoogle);
    } else {
      console.error('Sign in with Google button with id "signInWithGoogleBtn" not found.');
    }
  });
} */
// Listener for log out button
export function attachLogOutListener(logOut) {
  window.addEventListener('DOMContentLoaded', function() {
    const logOutBtn = document.getElementById('log-out-btn');
    if (logOutBtn) {
      logOutBtn.addEventListener('click', logOut);
    }
  });
}