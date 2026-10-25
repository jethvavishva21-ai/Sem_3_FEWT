import React from "react";
import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="card border-0 shadow-sm text-center p-4">
      <h3 className="text-secondary mb-4">useState Demonstration</h3>
      <h1 className="display-4 fw-bold text-primary mb-4">{count}</h1>

      <div className="d-flex justify-content-center gap-2">
        <button
          className="btn btn-success px-4 py-2 fw-bold"
          onClick={() => setCount(count + 1)}
        >
          + Increment
        </button>
        <button
          className="btn btn-danger px-4 py-2 fw-bold"
          onClick={() => setCount(count - 1)}
        >
          - Decrement
        </button>
        <button
          className="btn btn-secondary px-4 py-2 fw-bold"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseStateDemo;