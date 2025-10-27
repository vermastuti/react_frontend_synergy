import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios"; // ✅ Import axios
import "../styles/Login.css"; // dark red theme CSS

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loading, setLoading] = useState(false);

    function getUsername(evt) {
        setUsername(evt.target.value);
        setEmailError("");
    }

    function getPassword(evt) {
        setPassword(evt.target.value);
        setPasswordError("");
    }

    async function validatingInputs() {
        let valid = true;

        // Email validation using regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(username)) {
            setEmailError("Please enter a valid email address");
            valid = false;
        }

        // Password validation — only check if not empty
        if (password.trim() === "") {
            setPasswordError("Password cannot be empty");
            valid = false;
        }

        if (!valid) return;

        // ✅ Send login request to backend
        try {
            setLoading(true);

            const response = await axios.post("http://localhost:9003/auth/api/login", {
                email: username,
                password: password,
            });

            console.log(response)
            // Example: If backend returns { success: true, token: "..." }
            if (response.data) {
                sessionStorage.setItem("username", username);
                //sessionStorage.setItem("token", response.data.token); // optional if JWT
                navigate("/");
            } else {
                setPasswordError("Invalid username or password");
            }
        } catch (error) {
            console.error("Login error:", error);
            if (error.response) {
                if ((error.response.status === 401 || error.response.status === 403)) {
                    setPasswordError("Invalid credentials");
                }
            }
            else {
                setPasswordError("Network Not Connected");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <div className="form-container">
                <h1>Login</h1>

                <label>
                    Email
                    <input
                        autoComplete="off"
                        type="email"
                        name="username"
                        value={username}
                        onChange={getUsername}
                        placeholder="Enter your email"
                    />
                    {emailError && <div className="error">{emailError}</div>}
                </label>

                <label>
                    Password
                    <input
                        autoComplete="off"
                        type="password"
                        name="password"
                        value={password}
                        onChange={getPassword}
                        placeholder="Enter your password"
                    />
                    {passwordError && <div className="error">{passwordError}</div>}
                </label>

                <button onClick={validatingInputs} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="register-text">
                    Not registered?{" "}
                    <Link to="/register" className="link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );

// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function Login() {
//   const navigate = useNavigate();
//   const { login } = useContext(AuthContext);

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (username === "Sangeeta" && password === "Pass@123") {
//       login(username); // updates context and sessionStorage
//       navigate("/");
//     } else {
//       alert("Invalid User");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Login</h3>
//       <div className="mb-3">
//         <label>User Name:</label>
//         <input
//           type="text"
//           className="form-control"
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div className="mb-3">
//         <label>Password:</label>
//         <input
//           type="password"
//           className="form-control"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button className="btn btn-primary" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
}