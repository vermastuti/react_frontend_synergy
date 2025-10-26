import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "Sangeeta" && password === "Pass@123") {
      login(username); // updates context and sessionStorage
      navigate("/");
    } else {
      alert("Invalid User");
    }
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <div className="mb-3">
        <label>User Name:</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}