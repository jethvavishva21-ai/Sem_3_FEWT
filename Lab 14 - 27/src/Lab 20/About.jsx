import React from "react";

function About() {
  return (
    <div className="container mt-2">
      <h2 className="mb-4 text-info border-bottom pb-2">About Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <h4 className="text-secondary">Our Mission</h4>
          <p className="text-muted">
            Our mission is to build highly responsive, scalable, and robust web
            applications using modern technologies like ReactJS, Bootstrap, and
            modern JavaScript features.
          </p>
        </div>
        <div className="col-md-6">
          <h4 className="text-secondary">Who We Are</h4>
          <p className="text-muted">
            We are a team of passionate developers dedicated to solving complex
            problems through elegant code, intuitive user interfaces, and
            seamless user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
