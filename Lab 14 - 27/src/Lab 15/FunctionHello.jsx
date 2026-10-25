import React from "react";

function FunctionHello() {
  return (
    <div className="card shadow-sm border-0 p-4 text-center my-3">
      <h4 className="text-primary mb-3">1. Function Component</h4>
      <div className="p-4 bg-light rounded border">
        <h2 className="text-success fw-bold">
          Hello World from Function Component!
        </h2>
        <p className="text-muted mb-0">
          Created in a separate file and imported into the main component.
        </p>
      </div>
    </div>
  );
}

export default FunctionHello;