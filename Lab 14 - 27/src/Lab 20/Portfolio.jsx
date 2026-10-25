import React from "react";

function Portfolio() {
  return (
    <div className="container mt-2">
      <h2 className="mb-4 text-danger border-bottom pb-2">Our Portfolio</h2>
      <div className="row g-4 mt-2">
        <div className="col-md-6">
          <div className="card shadow-sm border-0 bg-light">
            <div className="card-header bg-danger text-white fw-bold">
              E-Commerce Platform
            </div>
            <div className="card-body">
              <p className="card-text text-muted">
                A fully functional online shopping application with shopping
                cart management, user authentication, and payment integration.
              </p>
              <div className="mt-3">
                <span className="badge bg-secondary me-2">React Router</span>
                <span className="badge bg-secondary me-2">Bootstrap</span>
                <span className="badge bg-secondary">State Management</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm border-0 bg-light">
            <div className="card-header bg-danger text-white fw-bold">
              Task Management App
            </div>
            <div className="card-body">
              <p className="card-text text-muted">
                A comprehensive productivity tool designed for teams to track
                ongoing projects, assign tasks, and monitor deadlines
                effectively.
              </p>
              <div className="mt-3">
                <span className="badge bg-secondary me-2">React Hooks</span>
                <span className="badge bg-secondary me-2">Context API</span>
                <span className="badge bg-secondary">CSS Modules</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
