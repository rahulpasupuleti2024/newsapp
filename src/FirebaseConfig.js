import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBQriAbooNjwArOjmz-d1ufXZOTu80QOrc",
  authDomain: "newsapp-ee027.firebaseapp.com",
  projectId: "newsapp-ee027",
  storageBucket: "newsapp-ee027.appspot.com",
  messagingSenderId: "801728279202",
  appId: "1:801728279202:web:8b1126f09a21583793ddfb",
};

const app = initializeApp(firebaseConfig);
export const data = getAuth(app);
