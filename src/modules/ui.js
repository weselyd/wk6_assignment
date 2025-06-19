import { attachLogOutListener, attachCarQueryListener } from "./events.js";
import { logOut } from "./auth.js";
import { callCarQueryProtected } from "./netlifyapi.js";

// Dynamically update UI after login
export function displayLoggedInUi(user) {
  const userInfoDiv = document.getElementById('user-info');
  if (user) {
    userInfoDiv.innerHTML = `
      <div class="bg-gray-700 rounded-xl p-6 flex flex-col items-center gap-4 shadow mb-4 w-full">
        <p class="text-blue-200 text-lg font-semibold text-center">
          Welcome, ${user.displayName || user.email}!
        </p>
        <p class="text-gray-200 text-center">
          This is your personal vehicle recommender - just tell us what you like and it will tell you what car makes sense for you!
        </p>
        <input 
          type="text" 
          id="car-query-input" 
          placeholder="Describe your ideal car here" 
          class="w-full rounded-lg border border-gray-600 bg-gray-900 text-gray-100 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition mt-2"
        />
        <button 
          id="get-car-recommendations-btn" 
          class="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg shadow transition mt-2"
        >
          Get car recommendations
        </button>
        </div>
        <div id="ai-car-recommendation" class="w-full mt-4"></div>
        <button 
          id="log-out-btn" 
          class="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg shadow transition mt-6"
        >
          Log Out
        </button>
    `;
    attachLogOutListener(logOut);
    attachCarQueryListener(callCarQueryProtected);
  } 
}

export function displayAiRecommendation(aiResponse) {  // Display AI recommendation in the UI
  let adviceElem = document.getElementById('ai-car-recommendation');
  
  if (adviceElem) { // Clear the spinner or any existing content before updating
    adviceElem.innerHTML = '';
  }
  let aiResponseMessage = JSON.parse(aiResponse);
  if (!adviceElem) {  // If the element doesn't exist, create it
    adviceElem = document.createElement('div');
    adviceElem.id = 'ai-car-recommendation';
    const btn = document.getElementById('get-car-recommendations-btn');
    if (btn) btn.parentNode.insertBefore(adviceElem, btn.nextSibling);
  }
  // Set the inner HTML of the advice element with the AI response
  adviceElem.innerHTML = `  
    <div class="bg-gray-800 rounded-xl p-6 shadow w-full mt-4 text-gray-100">
      ${aiResponseMessage.message || "No AI recommendation available."}
    </div>
  `;
  return adviceElem;
}

export function showCarRecommendationSpinner() { // Show a spinner while waiting for AI response
  const aiCarRecommendationDiv = document.getElementById('ai-car-recommendation');
  aiCarRecommendationDiv.innerHTML = `
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
      }
    </style>
    <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 48px;
    ">
      <div style="
        border: 4px solid #3b82f6;
        border-top: 4px solid transparent;
        border-radius: 50%;
        width: 36px;
        height: 36px;
        animation: spin 1s linear infinite;
      "></div>
    </div>
  `;
}