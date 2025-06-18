import { attachLogOutListener, attachSignInListener, attachNetlifyListener,attachNetlifyListenerProtected, attachAiListener, attachCarQueryListener } from "./events.js";
import { logOut, signIn } from "./auth.js";
import { callNetlifyApi, callNetlifyApiProtected, callOpenAiProtected, callCarQueryProtected } from "./netlifyapi.js";

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
      <div>
        <br><br>
        <input 
          type="text" 
          id="car-query-input" 
          placeholder="Tell me what car you are looking for" 
          style="width: 100%; padding: 8px; margin-top: 10px;"
        />
        <button id="get-car-recommendations-btn" style="margin-top: 10px;">Get car recommendations</button>
      </div>
      <div id="ai-car-recommendation"></div>
      <br><br><button id="log-out-btn">Log Out</button> 
    `;
    /*
    attachCarQueryListener(async (prompt) => {  // Set up AI button to fetch advice based on weather data
      if (!prompt) return;
      const aiRecommendation = displayAiResponse();  // Create section for AI advice if it doesn't exist
      //showSunSpinner('ai-weather-advice'); // Show rotating sun while loading AI response

      try {
        const aiReponse = await callOpenAI(prompt);  // Call OpenAI API with the prompt
        adviceElem.textContent = aiReponse.output?.[0]?.content?.[0]?.text?.trim() || "No advice received.";
      } catch (error) {  // Handle any errors from the OpenAI API call, log to console, and display a user-friendly message
        console.error('Error fetching AI advice:', error);
        adviceElem.textContent = "Could not get advice from OpenAI";
      }
    }); */
    attachLogOutListener(logOut);
    attachNetlifyListener(callNetlifyApi);
    attachNetlifyListenerProtected(callNetlifyApiProtected);
    attachAiListener(callOpenAiProtected);
    attachCarQueryListener(callCarQueryProtected);
    //console.log('User is logged in and displayLoggedInUi called');
  } else {
    userInfoDiv.innerHTML = 'test';
    //console.log('User is logged out and displayLoggedInUi called');
  }
}

export function displayAiRecommendation(aiResponse) {
  let adviceElem = document.getElementById('ai-car-recommendation');
  
  if (adviceElem) { // Clear the spinner or any existing content before updating
    adviceElem.innerHTML = '';
  }
  let aiResponseMessage = JSON.parse(aiResponse);
  if (!adviceElem) {
    adviceElem = document.createElement('div');
    adviceElem.id = 'ai-car-recommendation';
    const btn = document.getElementById('get-car-recommendations-btn');
    if (btn) btn.parentNode.insertBefore(adviceElem, btn.nextSibling);
  }
  adviceElem.textContent = aiResponseMessage.message || "No AI recommendation available.";
  return adviceElem;
}

export function showCarRecommendationSpinner() {
  const recommendationDiv = document.getElementById('ai-car-recommendation');
  if (recommendationDiv) {
    recommendationDiv.innerHTML = `
      <div class="spin" style="margin: 20px auto; text-align: center;">
        <div style="
          display: inline-block;
          width: 32px;
          height: 32px;
          border: 4px solid #ccc;
          border-top: 4px solid #333;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        "></div>
      </div>
    `;
  }
}