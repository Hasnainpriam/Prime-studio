import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8yGnEHTUPhz-Q2cioCnjQQgLJtx34KXo",
  authDomain: "prime-studio-3d3d1.firebaseapp.com",
  projectId: "prime-studio-3d3d1",
  storageBucket: "prime-studio-3d3d1.appspot.com",
  messagingSenderId: "80909555771",
  appId: "1:80909555771:web:49ef33c63e9814f033a41e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;