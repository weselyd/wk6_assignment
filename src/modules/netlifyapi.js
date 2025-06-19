import { getIdToken } from './auth.js';
import { displayAiRecommendation, showCarRecommendationSpinner } from './ui.js';

export async function callCarQueryProtected() {
  let trimmedCarQuery = document.getElementById('car-query-input').value.trim();
  trimmedCarQuery = trimmedCarQuery.replace(/[\/\\'"`]/g, '');  // Remove /, \, ", ', and ` from trimmedCarQuery to help prevent injection attacks
  const fullPrompt = `You are a highly knowledgeable automotive expert who specializes in helping drivers select the perfect vehicle based on their needs.  In two or fewer sentences, tell me what vehicle I should buy based on this description: ${trimmedCarQuery}`;
  
  showCarRecommendationSpinner();

  try {
    const idToken = await getIdToken();
    const response = await fetch('https://dulcet-croissant-1ef096.netlify.app/.netlify/functions/caradvice', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${idToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        input: `${fullPrompt}`,
      }),
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    const data = await response.json();
    const aiResponse = JSON.stringify(data);
    console.log('AI Response:', aiResponse);
    displayAiRecommendation(aiResponse);
  } catch (error) {
    console.error('Netlify API error:', error);
    errorMessage.textContent = 'Failed to call Netlify API: ' + error.message;
  }
}
