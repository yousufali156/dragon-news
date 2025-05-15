// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// DANGER TO SHARE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw6vL-3bjz1rxXYbAU8ul1qjeF1cTa5FQ",
  authDomain: "dragon-news-y.firebaseapp.com",
  projectId: "dragon-news-y",
  storageBucket: "dragon-news-y.firebasestorage.app",
  messagingSenderId: "493873318419",
  appId: "1:493873318419:web:75dea23d48dd8ae82b0de6",
  measurementId: "G-RWGS3PZDVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export default app; 