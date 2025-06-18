import { attachLogOutListener, attachSignInListener, attachNetlifyListener,attachNetlifyListenerProtected, attachAiListener } from "./events.js";
import { logOut, signIn } from "./auth.js";
import { callNetlifyApi, callNetlifyApiProtected, callOpenAiProtected } from "./netlifyapi.js";

// Example: Dynamically update user-info after login
export function displayLoggedInUi(user) {
  const userInfoDiv = document.getElementById('user-info');
  if (user) {
    userInfoDiv.innerHTML = `
      <p>Welcome, ${user.displayName || user.email}!!</p>
      <button id="netflifyApi-btn">Call Netlify API</button>
      <div>
        <button id="netflifyApProtected-btn" style="width: 100%;">Call Netlify API Protected</button>
      </div>
      <div>
        <button id="callOpenAI-btn" style="width: 100%;">Call Open API Protected</button>
      </div>
      <br><br><button id="log-out-btn">Log Out</button> 
    `;
    attachLogOutListener(logOut);
    attachNetlifyListener(callNetlifyApi);
    attachNetlifyListenerProtected(callNetlifyApiProtected);
    attachAiListener(callOpenAiProtected);
    //console.log('User is logged in and displayLoggedInUi called');
  } else {
    userInfoDiv.innerHTML = 'test';
    //console.log('User is logged out and displayLoggedInUi called');
  }
}