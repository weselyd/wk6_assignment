import { attachSignInListener } from './modules/events.js';
import { signIn } from './modules/auth.js';

document.addEventListener('DOMContentLoaded', () => {
    attachSignInListener(signIn);


})

