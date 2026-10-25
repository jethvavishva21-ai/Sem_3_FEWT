import React from "react";
import C2 from "./C2";

function B2({ name, setName, inputValue }) {
  return (
    <div className="p-2">
      <button
        onClick={() => setName(inputValue)}
        className="btn btn-primary mb-3"
      >
        Set Name
      </button>
      <C2 name={name} />
    </div>
  );
}
export default B2;  