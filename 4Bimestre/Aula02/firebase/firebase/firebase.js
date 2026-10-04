import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBkjA1kp2iaUWpn9PyD5AZ2JjUE-ymsMGY",
  authDomain: "aulafire-f37c9.firebaseapp.com",
  projectId: "aulafire-f37c9",
  storageBucket: "aulafire-f37c9.firebasestorage.app",
  messagingSenderId: "91901252201",
  appId: "1:91901252201:web:6606785fba86ee442708f8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);