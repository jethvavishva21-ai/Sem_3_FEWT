import React, { useState } from "react";

function Login({ setIsLoggedIn, setUsername }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (userId === "admin" && password === "12345") {
      setIsLoggedIn(true);
      setUsername(userId);
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div className="card p-4 mx-auto w-50 shadow-sm mt-3">
      <h4 className="text-center mb-3">Login</h4>
      <input
        type="text"
        placeholder="Username (admin)"
        onChange={(e) => setUserId(e.target.value)}
        className="form-control mb-2"
      />
      <input
        type="password"
        placeholder="Password (12345)"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-3"
      />
      <button onClick={handleLogin} className="btn btn-primary w-100">
        Login
      </button>
    </div>
  );
}
export default Login;
