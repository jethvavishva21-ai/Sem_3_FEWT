import React from "react";
import { Link, Outlet } from "react-router-dom";

function App14() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 14 : Setting up ReactJS Development Environment
        </h2>
        <nav className="nav nav-pills justify-content-center gap-2 flex-wrap">
          <Link className="nav-link border" to="a1">
            1. Setup Env
          </Link>
          <Link className="nav-link border" to="a2">
            2. Hello World
          </Link>
          <Link className="nav-link border" to="a3">
            3. JSX Demo
          </Link>
          <Link className="nav-link border" to="a4">
            4. Class Component
          </Link>
          <Link className="nav-link border" to="a5">
            5. Function Component
          </Link>
        </nav>
      </div>

      <div className="card-body bg-light p-4 p-md-5">
        <Outlet />
      </div>
    </div>
  );
}

export default App14;
