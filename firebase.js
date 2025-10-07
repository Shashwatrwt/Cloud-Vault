import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
//your firebase config
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
