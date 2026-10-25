import React, { Component } from "react";

class ClassHello extends Component {
  render() {
    return (
      <div className="card shadow-sm border-0 p-4 text-center my-3">
        <h4 className="text-primary mb-3">2. Class Component</h4>
        <div className="p-4 bg-light rounded border">
          <h2 className="text-info fw-bold">
            Hello World from Class Component!
          </h2>
          <p className="text-muted mb-0">
            Created in a separate file using <code>extends Component</code> and
            imported.
          </p>
        </div>
      </div>
    );
  }
}

export default ClassHello;