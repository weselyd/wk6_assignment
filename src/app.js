import { attachLogOutListener, attachSignInListener } from './modules/events.js';
import { logOut, signIn } from './modules/auth.js';



attachLogOutListener(logOut);
attachSignInListener(signIn);