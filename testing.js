// Initialize Firebase with your project configuration (replace with your actual Firebase config)
var firebaseConfig = {
  apiKey: "AIzaSyDrJQcdwGklLlPDmXJw8jP7CInqZwVtnLI",
  authDomain: "vthacks11-399205.firebaseapp.com",
  projectId: "vthacks11-399205",
  storageBucket: "vthacks11-399205.appspot.com",
  messagingSenderId: "1084270193305",
  appId: "1:1084270193305:web:41a64b275913cfb17ba608",
  measurementId: "G-93C7BS1XFX"
};

firebase.initializeApp(firebaseConfig);

// Add an event listener to the "Sign Out" link
document.getElementById("sign-out-link").addEventListener("click", function () {
  firebase.auth().signOut()
      .then(function () {
          // Sign-out successful.
          window.location.href = "index.html"; // Redirect to the sign-in page or wherever you want.
      })
      .catch(function (error) {
          // An error happened.
          console.error('Error signing out:', error);
      });
});

// You can also add code to check the authentication state and customize your UI accordingly.
