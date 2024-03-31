import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    const user = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    console.log(user);
  };

  // const logout = async () => {
  //     await signOut(auth);
  // };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white mt-5"> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          className="mt-3"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
        <button
          onClick={login}
          className="rounded-lg shadow-md bg-custom-grey text-white mt-3 px-4 py-2"
        >
          Login
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-white mt-5"> Register User </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          className="mt-3"
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button
          onClick={register}
          className="rounded-lg shadow-md bg-custom-grey text-white mt-3 px-4 py-2"
        >
          Create User
        </button>
      </div>

      {/* <h4> User Logged In: </h4>
      {user?.email} */}

      {/* <button onClick={logout}> Sign Out </button> */}
    </div>
  );
}

export default App;
