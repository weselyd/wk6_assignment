import { getIdToken } from './auth.js';

// Call Netlify API
export function callNetlifyApi() {
  fetch('https://dulcet-croissant-1ef096.netlify.app/.netlify/functions/hello', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log('Netlify API response:', data);
      alert('Netlify API response: ' + JSON.stringify(data));
    })
    .catch((error) => {
      console.error('Netlify API error:', error);
      errorMessage.textContent = 'Failed to call Netlify API: ' + error.message;
    });
}
/*
// Working call to Netlify API protected - but no authentication yet
export function callNetlifyApiProtected() {
  fetch('https://dulcet-croissant-1ef096.netlify.app/.netlify/functions/hello-protected', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log('Netlify API response:', data);
      alert('Netlify API response: ' + JSON.stringify(data));
    })
    .catch((error) => {
      console.error('Netlify API error:', error);
      errorMessage.textContent = 'Failed to call Netlify API: ' + error.message;
    });
}
    */
export function callNetlifyApiProtected() {
  getIdToken().then((idToken) => {
  fetch('https://dulcet-croissant-1ef096.netlify.app/.netlify/functions/hello-protected', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log('Netlify API response:', data);
      alert('Netlify API response: ' + JSON.stringify(data));
    })
    .catch((error) => {
      console.error('Netlify API error:', error);
      errorMessage.textContent = 'Failed to call Netlify API: ' + error.message;
    });
  });
}