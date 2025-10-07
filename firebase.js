import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyC1iTuyvPRZ7I2-EYnyh1p0CAFFmsdnw-Q",
  authDomain: "cloud-vault-78f57.firebaseapp.com",
  projectId: "cloud-vault-78f57",
  storageBucket: "cloud-vault-78f57.firebasestorage.app",
  messagingSenderId: "217662026557",
  appId: "1:217662026557:web:905c7c6896d069e2c3cb54",
  measurementId: "G-R5JN7HGJNQ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };