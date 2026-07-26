import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4oCFvvMFi7VW583J_5Vs7ExYVsOMURcg",
  authDomain: "parul-online-portal.firebaseapp.com",
  projectId: "parul-online-portal",
  storageBucket: "parul-online-portal.firebasestorage.app",
  messagingSenderId: "93768399802",
  appId: "1:93768399802:web:ce82a4a1fc867fa74ffb83",
  measurementId: "G-4SWN2QJY2C"
};

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
