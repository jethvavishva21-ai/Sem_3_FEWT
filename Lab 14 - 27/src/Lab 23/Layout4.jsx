import React from 'react'
import { Link, Outlet } from "react-router-dom";

function Layout4() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 23 : CRUD operation on Array in ReactJS
        </h2>
        <nav className="nav nav-pills justify-content-center gap-3">
          <Link className="nav-link border" to="/lab23">
            Products stored
          </Link>
          <Link className="nav-link border" to="student">
            Student stored
          </Link>
          <Link className="nav-link border" to="faculties">
            Faculties stored
          </Link>
        </nav>
      </div>

      <div className="card-body bg-light p-4 p-md-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout4