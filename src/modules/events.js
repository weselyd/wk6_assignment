import { showCarRecommendationSpinner } from './ui.js';

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
export function attachCarQueryListener(carQuery) {
  const btn = document.getElementById('get-car-recommendations-btn');
  if (btn) {
    btn.addEventListener('click', carQuery);
  }
}