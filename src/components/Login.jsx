import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../App.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleLogin = async () => {
    const res = await axios.post("https://a02d-2401-4900-234e-cda-b8cf-a3c5-b118-a839.ngrok-free.app/api/auth/login", {
      email,
      password,
    });
    if (res.data.token) {
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
