import { initializeApp } from '@firebase/app';
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore'; // Import Firestore

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyBC_QOUy8WHusd0Frf2XQWKlz3vLrTpgxU",
  authDomain: "cicero-1988.firebaseapp.com",
  projectId: "cicero-1988",
  storageBucket: "cicero-1988.firebasestorage.app",
  messagingSenderId: "527797605198",
  appId: "1:527797605198:web:da895ee69ffc30c31c041f",
  measurementId: "G-GXX7J2W4FH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore

export { auth, firestore }; // Export Firestore
