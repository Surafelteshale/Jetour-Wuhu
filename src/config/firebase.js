import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDjBhH8VyrXrC6KIE_UIVZUiojZLw7t1bY",
  authDomain: "fir-course-cc419.firebaseapp.com",
  projectId: "fir-course-cc419",
  storageBucket: "fir-course-cc419.firebasestorage.app",
  messagingSenderId: "378937494028",
  appId: "1:378937494028:web:24a471495d3360b3fdfc29",
  measurementId: "G-W7SXNGMJ92"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);