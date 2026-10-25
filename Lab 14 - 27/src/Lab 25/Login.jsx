import { useState } from "react";
import { useAuth } from "./AuthContext";

function Login() {
  const { user, login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const result = login(username, password);
    if (!result.success) {
      setError(result.message);
    } else {
      setError("");
      setUsername("");
      setPassword("");
    }
  };

  if (user) {
    return (
      <div
        className="card shadow-sm border-0 p-4 text-center mx-auto"
        style={{ maxWidth: "450px" }}
      >
        <div className="alert alert-success mb-3">
          <h5 className="mb-1">Logged In Successfully!</h5>
          <p className="mb-0">
            You are logged in as <strong>{user.username}</strong>.
          </p>
        </div>
        <button className="btn btn-danger w-100" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div
      className="card shadow-sm border-0 p-4 mx-auto"
      style={{ maxWidth: "420px" }}
    >
      <h4 className="text-primary text-center mb-3">Login to Your Account</h4>

      {error && <div className="alert alert-danger py-2">{error}</div>}

      <form onSubmit={handleLoginSubmit}>
        <div className="mb-3">
          <label className="form-label fw-semibold">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username (admin)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password (12345)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100 py-2 fw-semibold"
        >
          Sign In
        </button>
      </form>

      <div className="card-footer bg-light border-0 text-muted text-center mt-3 py-2 rounded">
        <small>
          Default: <strong>admin</strong> / <strong>12345</strong>
        </small>
      </div>
    </div>
  );
}
export default Login;