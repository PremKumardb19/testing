import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../App.css"
const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("https://fa0b-2401-4900-2348-813f-4d09-12ff-2325-13b.ngrok-free.app/api/auth/login", {
      email,
      password,
    });
    if (res.data.token) {
      setIsAuthenticated(true);
      navigate("/home");
    }
  };

  return (
    <div className="auth-container">
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;

