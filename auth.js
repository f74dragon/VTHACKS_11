// Import necessary Firebase functions
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration (same as before)
const firebaseConfig = {
  apiKey: "AIzaSyDrJQcdwGklLlPDmXJw8jP7CInqZwVtnLI",
  authDomain: "vthacks11-399205.firebaseapp.com",
  projectId: "vthacks11-399205",
  storageBucket: "vthacks11-399205.appspot.com",
  messagingSenderId: "1084270193305",
  appId: "1:1084270193305:web:41a64b275913cfb17ba608",
  measurementId: "G-93C7BS1XFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Get references to HTML elements
const signupForm = document.getElementById("signup-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const emailInput = document.getElementById("email");
const fullnameInput = document.getElementById("fullname");

// Event listener for the signup form
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get user input
  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;
  const fullname = fullnameInput.value;

  try {
    // Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    // Get the user object
    const user = userCredential.user;

    // Store additional user data in the database (Firestore)
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      username: username,
      email: email,
      fullname: fullname
    });

    // Redirect the user to a success page or perform any other actions
    console.log("User signed up successfully!");
    // You can add code here to redirect to another page or display a success message.
  } catch (error) {
    console.error("Error signing up:", error.message);
    // Handle the error, such as displaying an error message to the user.
  }
});
