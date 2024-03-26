import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase-config"
function Login() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    interface UserData {
        username: string;
        password: string;
        prevState: null
    }
    const [user, setUser] = useState<UserData | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

    }, [])

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

    }

    const logout = async () => {

    }

    return (
        <>
            <div className="App">
                <div>
                    <h3 className="bg-white"> Register User </h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => { setRegisterEmail(event.target.value) }}
                    />
                    <input
                        placeholder="Password..."
                        onChange={(event) => { setRegisterPassword(event.target.value) }}
                    />

                    <button
                        onClick={register}
                        className="bg-white"> Create User</button>
                </div>

                <div>
                    <h3 className="bg-white"> Login </h3>
                    <input
                        placeholder="Email..."
                        onChange={(event) => { setLoginEmail(event.target.value) }}
                    />
                    <input
                        placeholder="Password..."
                        onChange={(event) => { setLoginPassword(event.target.value) }}
                    />

                    <button className="bg-white"> Login</button>
                </div>

                <h4 className="bg-white"> User Logged In: {user ? user.email : "Not logged in"} </h4>
                <button className="bg-white"> Sign Out </button>
            </div>
        </>
    );
}
export default Login;