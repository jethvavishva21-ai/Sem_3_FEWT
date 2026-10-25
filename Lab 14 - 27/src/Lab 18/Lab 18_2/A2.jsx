import React, { useState } from "react";
import B2 from "./B2";

function A2({ name, setName }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-2">
      <input
        type="text"
        placeholder="Enter name..."
        onChange={(e) => setInputValue(e.target.value)}
        className="form-control mb-2"
      />

      <B2 name={name} setName={setName} inputValue={inputValue} />
    </div>
  );
}
export default A2;