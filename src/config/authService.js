// authService.js
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { app } from "./firebase"; // your initialized Firebase app

const auth = getAuth(app);
const db = getFirestore(app);
const usersCollection = collection(db, "users");

/**
 * Sign in using firstName + password
 * @param {string} firstName
 * @param {string} password
 * @returns {Promise<{ success: boolean, message: string, user?: object }>}
 */
export const signInWithFirstName = async (firstName, password) => {
  try {
    // 1️⃣ Query Firestore for user with this firstName
    const q = query(usersCollection, where("firstName", "==", firstName));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return { success: false, message: "User not found" };
    }

    // 2️⃣ Get the first matching document (enforce unique firstNames in Firestore)
    const userDoc = querySnapshot.docs[0];
    const userData = userDoc.data();

    if (!userData.email) {
      return { success: false, message: "User email not found" };
    }

    // 3️⃣ Sign in with Firebase Auth using email + password
    await signInWithEmailAndPassword(auth, userData.email, password);

    // 4️⃣ Safe isAdmin check (defaults to false if field is missing)
    const isAdmin = userData.isAdmin ?? false;

    // ✅ Success
    return { success: true, message: "Logged in successfully", user: { ...userData, isAdmin } };
  } catch (error) {
    console.error("Firebase sign-in error:", error);
    let message = "Login failed";
    if (error.code === "auth/wrong-password") message = "Incorrect password";
    else if (error.code === "auth/user-not-found") message = "User not found";
    return { success: false, message };
  }
};
