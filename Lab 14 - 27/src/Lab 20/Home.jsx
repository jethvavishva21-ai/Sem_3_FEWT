import React from "react";

function Home() {
  return (
    <div className="container mt-2">
      <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold text-primary mb-3">
            Welcome to Home Page
          </h1>
          <p className="col-md-10 fs-5 text-muted">
            We deliver cutting-edge web development and React solutions to help
            your business grow. Explore our portal to learn more about our
            expertise and services.
          </p>
          <button className="btn btn-primary btn-lg mt-3" type="button">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
