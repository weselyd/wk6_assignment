import { attachLogOutListener, attachSignInListener, attachNetlifyListener } from './modules/events.js';
import { logOut, signIn, getIdToken } from './modules/auth.js';
import { callNetlifyApi } from './modules/netlifyapi.js';
import { displayLoggedInUi } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    attachSignInListener(signIn);


})

