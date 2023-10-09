import { getAuth } from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD6QNv2b7xrR5qdT87x6rSJSCPDCU78_Vk",
    authDomain: "e-commerce-c7b7.firebaseapp.com",
    projectId: "e-commerce-c7b7",
    storageBucket: "e-commerce-c7b7.appspot.com",
    messagingSenderId: "419470531734",
    appId: "1:419470531734:web:841597aa50263f0686f6b7"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();