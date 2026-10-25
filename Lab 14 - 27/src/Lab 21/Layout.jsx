import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 21: React Hooks
        </h2>
        <nav className="nav nav-pills justify-content-center gap-3">
          <Link className="nav-link border" to="usestate">
            useState
          </Link>
          <Link className="nav-link border" to="useeffect">
            useEffect
          </Link>
        </nav>
      </div>

      <div className="card-body bg-light p-4 p-md-5 d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "600px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;