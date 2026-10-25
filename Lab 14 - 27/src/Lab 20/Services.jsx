import React from "react";

function Services() {
  return (
    <div className="container mt-2">
      <h2 className="mb-4 text-warning border-bottom pb-2">Our Services</h2>
      <div className="row g-4 mt-2">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-warning border-top border-3">
            <div className="card-body">
              <h5 className="card-title text-dark">Frontend Development</h5>
              <p className="card-text text-muted">
                Creating interactive and dynamic single-page applications using
                ReactJS, HTML5, and modern CSS frameworks.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-warning border-top border-3">
            <div className="card-body">
              <h5 className="card-title text-dark">Backend Architecture</h5>
              <p className="card-text text-muted">
                Building robust RESTful APIs and secure database management
                systems to power your applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-warning border-top border-3">
            <div className="card-body">
              <h5 className="card-title text-dark">UI/UX Design</h5>
              <p className="card-text text-muted">
                Designing wireframes and interactive prototypes to ensure smooth
                and engaging user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;