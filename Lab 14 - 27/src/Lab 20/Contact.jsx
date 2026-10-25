import React from "react";

function Contact() {
  return (
    <div className="container mt-2">
      <h2 className="mb-4 text-success border-bottom pb-2">Contact Us</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label fw-bold">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success px-4">
              Send Message
            </button>
          </form>
        </div>
        <div className="col-md-5 offset-md-1 mt-4 mt-md-0 bg-light p-4 rounded border">
          <h5 className="text-dark">Office Location</h5>
          <p className="text-muted mb-4">
            123 React Avenue, Tech City, TX 75001
          </p>

          <h5 className="text-dark">Phone</h5>
          <p className="text-muted mb-4">+1 (555) 123-4567</p>

          <h5 className="text-dark">Email</h5>
          <p className="text-muted">support@technovasolutions.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
