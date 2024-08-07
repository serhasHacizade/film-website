import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj1c1D_wwYiZ3A5IEkTQWfWLtphQ6buTw",
  authDomain: "netflix-project-6bb59.firebaseapp.com",
  projectId: "netflix-project-6bb59",
  storageBucket: "netflix-project-6bb59.appspot.com",
  messagingSenderId: "708051224318",
  appId: "1:708051224318:web:3212ebf03047ef3c0e87af"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
