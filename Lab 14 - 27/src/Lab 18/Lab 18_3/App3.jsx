import React, { useState } from "react";
import MainSection from "./MainSection";

function App3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="container mt-4 border border-primary p-4">
      <h2 className="text-center">Static Login System </h2>
      <MainSection
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        username={username}
        setUsername={setUsername}
      />
    </div>
  );
}
export default App3;
