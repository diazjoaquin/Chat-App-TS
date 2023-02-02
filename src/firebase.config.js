import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const firebaseConfig = {
    apiKey: "AIzaSyDEh8auE1EhioG5F6znShSKhpwgVMQ11qI",
    authDomain: "realtime-chat-ts-1f79e.firebaseapp.com",
    projectId: "realtime-chat-ts-1f79e",
    storageBucket: "realtime-chat-ts-1f79e.appspot.com",
    messagingSenderId: "754527494105",
    appId: "1:754527494105:web:8161b830dd4c36bdea83c8",
    measurementId: "G-HNZTDSC7FG"
  };

  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);