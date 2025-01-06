import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
import "../App.css"
const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post(" https://0be0-2409-40f4-101b-3012-e9cd-701d-93f4-2ece.ngrok-free.app/api/auth/login", {
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

