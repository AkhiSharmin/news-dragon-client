// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOOa25RIPsodjQEmnCIInXWMRdZaTxJqs",
    authDomain: "news-portal-main.firebaseapp.com",
    projectId: "news-portal-main",
    storageBucket: "news-portal-main.appspot.com",
    messagingSenderId: "485400869312",
    appId: "1:485400869312:web:79e98a23f4e79319037025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;