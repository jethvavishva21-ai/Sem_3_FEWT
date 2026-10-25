import React from "react";

function Dashboard({ username, setIsLoggedIn }) {
  return (
    <div className="alert alert-success mt-4 text-center">
      <h3>Welcome, {username}!</h3>
      <p>You have successfully logged in.</p>
      <button
        onClick={() => setIsLoggedIn(false)}
        className="btn btn-danger mt-2"
      >
        Logout
      </button>
    </div>
  );
}
export default Dashboard;