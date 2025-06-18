// Listener for sign in button
export function attachSignInListener(signIn) {
  const signInBtn = document.getElementById('sign-in-btn');
  if (signInBtn) {
    signInBtn.addEventListener('click', signIn);
  } 
}


// Listener for log out button
export function attachLogOutListener(logOut) {
  const logOutBtn = document.getElementById('log-out-btn');
  if (logOutBtn) {
    logOutBtn.addEventListener('click', logOut);
  }
}

export function attachNetlifyListener(netlifyApi) {
  const netflifyApiBtn = document.getElementById('netflifyApi-btn');
  if (netflifyApiBtn) {
    netflifyApiBtn.addEventListener('click', netlifyApi);
  }
}

export function attachNetlifyListenerProtected (netlifyApiProtected) {
  const netflifyApiProtectedBtn = document.getElementById('netflifyApProtected-btn');
  if (netflifyApiProtectedBtn) {
    netflifyApiProtectedBtn.addEventListener('click', netlifyApiProtected);
  }
}

export function attachAiListener(aiApi) {
  const aiApiBtn = document.getElementById('aiApi-btn');
  if (aiApiBtn) {
    aiApiBtn.addEventListener('click', aiApi);
  }
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