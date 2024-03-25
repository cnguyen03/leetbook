

function Login() {
    return (
        <>
            <div className="App">
                <div>
                    <h3 className="bg-white"> Register User </h3>
                    <input
                        placeholder="Email..."
                    />
                    <input
                        placeholder="Password..."
                    />

                    <button className="bg-white"> Create User</button>
                </div>

                <div>
                    <h3 className="bg-white"> Login </h3>
                    <input
                        placeholder="Email..."
                    />
                    <input
                        placeholder="Password..."
                    />

                    <button className="bg-white"> Login</button>
                </div>

                <h4 className="bg-white"> User Logged In: </h4>

                <button className="bg-white"> Sign Out </button>
            </div>
        </>
    );
}
export default Login;