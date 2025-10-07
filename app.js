import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login");
const signupBtn = document.getElementById("signup");
const message = document.getElementById("message");

// Sign Up
signupBtn.addEventListener("click", async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    message.textContent = "Account created! Redirecting...";
    setTimeout(() => window.location.href = "dashboard.html", 1500);
  } catch (error) {
    message.textContent = error.message;
  }
});

// Login
loginBtn.addEventListener("click", async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    message.textContent = "Logged in! Redirecting...";
    setTimeout(() => window.location.href = "dashboard.html", 1500);
  } catch (error) {
    message.textContent = error.message;
  }
});
