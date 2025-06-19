# wk6_assignment
This is a Car Recommender application.  It utilizes Firebase username/password type authentication, GitHub Pages for static page hosting, Netlify for serverless backend processing, and OpenAI to generate responses to user requests for car purchasing advice.

Performance standards such as async/await for the API call, defer loading of scipts, and compression is supported by default supported by backend, serverless provider (Netlify).

For security, user authentication is handled by Google Firebase and uses bearer tokens for user login and tokens are verified when calling backend services.  To help prevent injection attacks, user input is stripped of certain characters including tick marks, quotes, front and backslashes.  For additional security CORS policy is used and scoped to just the GitHub Pages location.


To setup this application in a similar manner:
* Create a GitHub account and clone this repo for front end code (https://github.com/weselyd/wk6_assignment) as well as the Netlify repo for back end (https://github.com/weselyd/wk6_netlify).
* Enable GitHub Pages for front end repo and configure it to deploy from a branch (default behavior)
* Create a Firebase account, setup a new application, and configure username/password auth method - you'll also want to create at least one user account.
* Create a OpenAI account and generate an API key.
* Create a Netlify account.
 - Connect your GitHub account and link to the backend code repo.
 - Add secrets for your Firebase secrets (Project ID, Client Email, and Private Key) and OpenAI Key.
* For front end secrets, you will want to update secrets with your details in the auth.js file.  This is bad practice and a significant security risk to have in front end code.  The Firebase auth functionality needs to be refactored to be a backend service as to not share secrets.
* Ensure both builds deployed properly and it should be up and running

Future improvements for this should be:
* Configure Firebase auth to function as a backend service
* Save previous recommendations in browser or database
* Add "Sign in with Google" capability
* Further integration with user details (sourced from Firebase) in UI
* Bundle Tailwind CSS classes for cleaner, more readible code