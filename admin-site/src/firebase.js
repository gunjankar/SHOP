// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcdpJc2HgEceuAR3XMMFmdCBOaPuczRwk",
  authDomain: "shop-adcdd.firebaseapp.com",
  projectId: "shop-adcdd",
  storageBucket: "shop-adcdd.appspot.com",
  messagingSenderId: "499076209121",
  appId: "1:499076209121:web:2a087d683fcbbcefe75aa0",
  measurementId: "G-ZH3EGJZ5R8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;