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
    <button
      className="rounded-lg shadow-md bg-custom-grey text-white mt-3 ml-3 px-1 py-1"
      onClick={logout}
    >
      Sign Out
    </button>
  );
}

export default Logout;
