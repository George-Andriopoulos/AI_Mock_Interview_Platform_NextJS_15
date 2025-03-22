// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAj9jOz5nKrVi5ggLqPYKk38L1EzOO0QSE",
	authDomain: "prepwise-31207.firebaseapp.com",
	projectId: "prepwise-31207",
	storageBucket: "prepwise-31207.firebasestorage.app",
	messagingSenderId: "719490768229",
	appId: "1:719490768229:web:94a3687444172573a2958c",
	measurementId: "G-V7P69N1QR9",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
