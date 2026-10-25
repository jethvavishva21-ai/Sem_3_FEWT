import React from "react";
import FunctionHello from "./FunctionHello";
import ClassHello from "./ClassHello";

function App15() {
  return (
    <div className="container py-4">
      <h2 className="text-center text-primary fw-bold mb-4">
        Lab 15 : Hello World ReactJS App
      </h2>

      <div className="row g-4">
        {/* Part A: Function Component */}
        <div className="col-md-6">
          <FunctionHello />
        </div>

        {/* Part B: Class Component */}
        <div className="col-md-6">
          <ClassHello />
        </div>
      </div>
    </div>
  );
}

export default App15