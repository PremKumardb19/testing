import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleRegister = async () => {
    const res = await axios.post("https://a02d-2401-4900-234e-cda-b8cf-a3c5-b118-a839.ngrok-free.app/api/auth/register", {
      name,
      email,
      password,
    });
    console.log(res.data)
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
