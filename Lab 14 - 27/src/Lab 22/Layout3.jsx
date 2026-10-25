import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Layout3() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 22 : Calculator using ReactJS
        </h2>
        <nav className="nav nav-pills justify-content-center gap-2">
          <Link className="nav-link border" to="/lab22">
            Simple Calculator
          </Link>
          <Link className="nav-link border" to="/lab22/scientific">
            Scientific Calculator
          </Link>
        </nav>
      </div>

      <div className="card-body bg-light p-4 p-md-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout3