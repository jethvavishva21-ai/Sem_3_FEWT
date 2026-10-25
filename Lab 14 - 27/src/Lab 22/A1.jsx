import React from 'react'
import { useState } from "react";

function A1() {
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setDisplay("0");
    } else if (value === "DEL") {
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "=") {
      try {
        // Safe evaluation without eval
        const sanitized = display.replace(/×/g, "*").replace(/÷/g, "/");
        const result = Function(`'use strict'; return (${sanitized})`)();
        setDisplay(String(Number(result.toFixed(6))));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay((prev) =>
        prev === "0" || prev === "Error" ? value : prev + value,
      );
    }
  };

  const buttons = [
    ["C", "DEL", "%", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["00", "0", ".", "="],
  ];

  return (
    <div
      className="card shadow-sm border-0 p-4 mx-auto"
      style={{ maxWidth: "380px" }}
    >
      <h4 className="text-primary text-center mb-3">1. Simple Calculator</h4>

      {/* Screen */}
      <div className="bg-dark text-white text-end rounded p-3 mb-3 fs-3 fw-bold overflow-hidden">
        {display}
      </div>

      {/* Keypad */}
      <div className="row g-2">
        {buttons.flat().map((btn, index) => {
          let btnClass = "btn btn-outline-secondary fs-5 py-2";
          if (["+", "-", "×", "÷", "%"].includes(btn))
            btnClass = "btn btn-primary fs-5 py-2";
          if (btn === "=") btnClass = "btn btn-success fs-5 py-2";
          if (btn === "C" || btn === "DEL")
            btnClass = "btn btn-danger fs-5 py-2";

          return (
            <div key={index} className="col-3">
              <button
                type="button"
                className={`w-100 ${btnClass}`}
                onClick={() => handleButtonClick(btn)}
              >
                {btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default A1