import Title from "./components/Title";
import BoxCreator from "./components/BoxCreator";
import Login from "./components/Login";

import "./index.css"; // Import Tailwind CSS styles

import "tailwindcss/tailwind.css";
import { auth } from "./components/firebase-config";
import "firebase/auth";
import { User, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState<User | null>(null); // State to hold user auth status

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state based on authentication status
    });

    // Cleanup subscription to avoid memory leaks
    return () => unsubscribe();
  }, []); // Run effect only once on component mount

  return (
    <>
      <Title />
      {user ? <BoxCreator /> : <Login />}
    </>
  );
}

export default App;
