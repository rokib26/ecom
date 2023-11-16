import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBbGkII7eK7XeoX_ZPb0gMO-hPc8FndA4M",
  authDomain: "fir-auth-1-5bf0f.firebaseapp.com",
  projectId: "fir-auth-1-5bf0f",
  storageBucket: "fir-auth-1-5bf0f.appspot.com",
  messagingSenderId: "645830231702",
  appId: "1:645830231702:web:2c5668687056c70c97a4b7",
  measurementId: "G-D3KH7NGPCQ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
