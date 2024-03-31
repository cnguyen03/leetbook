// Components
import Title from "./components/Title";
import BoxCreator from "./components/BoxCreator";
import Login from "./components/Login";
import Logout from "./components/Logout";
// Tailwind CSS styles
import "./index.css";
import "tailwindcss/tailwind.css";
// Firebase
import { auth } from "./components/firebase-config";
import "firebase/auth";
import { User, onAuthStateChanged } from "firebase/auth";
// React hooks
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState<User | null>(null); // State to hold user auth status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update user state based on authentication status
      setLoading(false);
    });

    // Cleanup subscription to avoid memory leaks
    return () => unsubscribe();
  }, []); // Run effect only once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {user && <Logout />}
      <Title />
      {user ? <BoxCreator /> : <Login />}
      {/* Render logout component only when user is logged in*/}
    </>
  );
}

export default App;
