import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function MainSection({ isLoggedIn, setIsLoggedIn, username, setUsername }) {
  return (
    <div>
      {isLoggedIn ? (
        <Dashboard username={username} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />
      )}
    </div>
  );
}
export default MainSection;
