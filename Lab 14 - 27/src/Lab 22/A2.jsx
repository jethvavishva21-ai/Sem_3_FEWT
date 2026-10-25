import React from 'react'
import { useState } from "react";

function A2() {
  const [display, setDisplay] = useState("0");

  const handleInput = (val) => {
    setDisplay((prev) => (prev === "0" || prev === "Error" ? val : prev + val));
  };

  const clearAll = () => setDisplay("0");

  const deleteLast = () => {
    setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  const calculateResult = () => {
    try {
      const sanitized = display.replace(/×/g, "*").replace(/÷/g, "/");
      const result = Function(`'use strict'; return (${sanitized})`)();
      setDisplay(String(Number(result.toFixed(6))));
    } catch {
      setDisplay("Error");
    }
  };

  const handleFunction = (fn) => {
    try {
      const currentVal = parseFloat(display);
      let res = 0;
      switch (fn) {
        case "sin":
          res = Math.sin((currentVal * Math.PI) / 180);
          break;
        case "cos":
          res = Math.cos((currentVal * Math.PI) / 180);
          break;
        case "tan":
          res = Math.tan((currentVal * Math.PI) / 180);
          break;
        case "sqrt":
          res = Math.sqrt(currentVal);
          break;
        case "sqr":
          res = Math.pow(currentVal, 2);
          break;
        case "log":
          res = Math.log10(currentVal);
          break;
        case "ln":
          res = Math.log(currentVal);
          break;
        case "pi":
          res = Math.PI;
          break;
        default:
          return;
      }
      setDisplay(String(Number(res.toFixed(6))));
    } catch {
      setDisplay("Error");
    }
  };

  const sciButtons = [
    { label: "sin", fn: () => handleFunction("sin") },
    { label: "cos", fn: () => handleFunction("cos") },
    { label: "tan", fn: () => handleFunction("tan") },
    { label: "√", fn: () => handleFunction("sqrt") },
    { label: "x²", fn: () => handleFunction("sqr") },
    { label: "log", fn: () => handleFunction("log") },
    { label: "ln", fn: () => handleFunction("ln") },
    { label: "π", fn: () => handleFunction("pi") },
    { label: "(", val: "(" },
    { label: ")", val: ")" },
  ];

  const basicButtons = [
    { label: "C", action: clearAll, type: "danger" },
    { label: "DEL", action: deleteLast, type: "danger" },
    { label: "%", val: "%", type: "primary" },
    { label: "÷", val: "÷", type: "primary" },
    { label: "7", val: "7" },
    { label: "8", val: "8" },
    { label: "9", val: "9" },
    { label: "×", val: "×", type: "primary" },
    { label: "4", val: "4" },
    { label: "5", val: "5" },
    { label: "6", val: "6" },
    { label: "-", val: "-", type: "primary" },
    { label: "1", val: "1" },
    { label: "2", val: "2" },
    { label: "3", val: "3" },
    { label: "+", val: "+", type: "primary" },
    { label: "0", val: "0" },
    { label: ".", val: "." },
    { label: "=", action: calculateResult, type: "success", span: 2 },
  ];

  return (
    <div
      className="card shadow-sm border-0 p-4 mx-auto"
      style={{ maxWidth: "520px" }}
    >
      <h4 className="text-primary text-center mb-3">
        2. Scientific Calculator
      </h4>

      {/* Screen */}
      <div className="bg-dark text-white text-end rounded p-3 mb-3 fs-3 fw-bold overflow-hidden">
        {display}
      </div>

      {/* Scientific Functions Keypad */}
      <div className="row g-2 mb-2">
        {sciButtons.map((btn, index) => (
          <div
            key={index}
            className="col-2 col-md-custom"
            style={{ width: "20%" }}
          >
            <button
              type="button"
              className="btn btn-secondary w-100 py-2 btn-sm fw-semibold"
              onClick={btn.fn ? btn.fn : () => handleInput(btn.val)}
            >
              {btn.label}
            </button>
          </div>
        ))}
      </div>

      {/* Standard Keypad */}
      <div className="row g-2">
        {basicButtons.map((btn, index) => {
          let btnClass = "btn btn-outline-secondary";
          if (btn.type === "primary") btnClass = "btn btn-primary";
          if (btn.type === "danger") btnClass = "btn btn-danger";
          if (btn.type === "success") btnClass = "btn btn-success";

          return (
            <div key={index} className={`col-${btn.span ? btn.span * 3 : 3}`}>
              <button
                type="button"
                className={`w-100 py-2 fs-5 ${btnClass}`}
                onClick={btn.action ? btn.action : () => handleInput(btn.val)}
              >
                {btn.label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default A2
