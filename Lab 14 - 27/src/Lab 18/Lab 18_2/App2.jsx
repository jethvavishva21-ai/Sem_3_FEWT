import React, { useState } from "react";
import A2 from "./A2";

function App2() {
  const [name, setName] = useState("");

  return (
    <div className="p-3 border border-primary">
      <h3>App Component</h3>
      <A2 name={name} setName={setName} />
    </div>
  );
}
export default App2;
