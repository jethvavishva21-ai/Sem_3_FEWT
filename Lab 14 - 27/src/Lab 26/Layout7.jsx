import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout7() {
  return (
    <div style={{ backgroundColor: "#f4efe1", minHeight: "100vh" }}>
      {/* Top Bar */}
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          fontSize: "13px",
          padding: "5px 20px",
        }}
      >
        <span>Internet Archive's Open Library Clone — Lab 26 Mini Project</span>
      </div>

      {/* Open Library Header */}
      <nav
        className="navbar navbar-expand-lg border-bottom"
        style={{ backgroundColor: "#e8dec8" }}
      >
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark fs-4" to="/lab26">
            📖 OpenLibrary
          </Link>
          <div className="navbar-nav ms-auto gap-2 flex-row">
            <Link className="btn btn-outline-dark btn-sm" to="/lab26">
              Home
            </Link>
            <Link className="btn btn-outline-dark btn-sm" to="/lab26/manage">
              Catalog (CRUD)
            </Link>
            <Link className="btn btn-primary btn-sm" to="/lab26/add">
              + Add Book
            </Link>
          </div>
        </div>
      </nav>
          
      <Outlet />
    </div>
  );
}

export default Layout7;
