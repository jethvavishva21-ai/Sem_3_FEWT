import { useState } from "react";

function L14_A5() {
  const [message, setMessage] = useState("This is a functional component.");

  return (
    <div className="card shadow-sm border-0 p-4 text-center">
      <h4 className="text-primary mb-3">5. Simple Function Component</h4>
      <div className="alert alert-warning py-2">
        This is written using modern ES6 function syntax and React Hooks.
      </div>

      <p className="fs-5 text-dark fw-semibold mt-3">{message}</p>

      <button
        className="btn btn-success"
        onClick={() =>
          setMessage("State updated using useState hook successfully!")
        }
      >
        Update Message
      </button>
    </div>
  );
}

export default L14_A5;