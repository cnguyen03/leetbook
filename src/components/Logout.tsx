import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function Logout() {
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <button className="text-white" onClick={logout}>
      Sign Out
    </button>
  );
}

export default Logout;
