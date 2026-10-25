import React, { Component } from "react";

export default class L14_A4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="card shadow-sm border-0 p-4 text-center">
        <h4 className="text-primary mb-3">4. Simple Class Component</h4>
        <div className="alert alert-info py-2">
          This component extends <code>React.Component</code> and uses{" "}
          <code>render()</code>.
        </div>

        <h3 className="my-3">
          Counter: <span className="badge bg-primary">{this.state.count}</span>
        </h3>
        <div>
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => this.setState({ count: 0 })}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}