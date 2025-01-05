import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route, Link,Navigate } from "react-router-dom";
import { useState } from "react";
import "./App.css"

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const ProtectedRoute = ({ element }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return element;
  };

  return (
    <Router>
      <div>
        <h1>MERN Auth</h1>
        <nav>
          <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </nav>
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute element={<Home />} />
            }
          />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
