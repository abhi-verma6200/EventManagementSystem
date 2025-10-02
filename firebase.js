
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBngz_YEb-UVq6Nwc5R1EdRoNV62BKfuTA",
  authDomain: "events-management-c6e60.firebaseapp.com",
  projectId: "events-management-c6e60",
  storageBucket: "events-management-c6e60.firebasestorage.app",
  messagingSenderId: "780049958783",
  appId: "1:780049958783:web:0c51ae5e21a2d727233c4a",
  measurementId: "G-0PBQYB4NSY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };