import React, { useState, useEffect, useRef } from "react";

function UseEffectDemo() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const runEveryRender = useRef(0);
  const runOnlyOnce = useRef(0);
  const runOnCountChange = useRef(0);

  useEffect(() => {
    runEveryRender.current += 1;
  });

  useEffect(() => {
    runOnlyOnce.current += 1;
  }, []);

  useEffect(() => {
    runOnCountChange.current += 1;
  }, [count]);

  return (
    <div className="card border-0 shadow-sm text-center p-4">
      <h3 className="text-secondary mb-4">useEffect Demonstration</h3>

      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="text-muted">No Argument</h6>
            <h2 className="text-primary fw-bold">{runEveryRender.current}</h2>
            <small>Runs on EVERY render</small>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="text-muted">Empty Array []</h6>
            <h2 className="text-danger fw-bold">{runOnlyOnce.current}</h2>
            <small>Runs ONLY ONCE</small>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-3 border rounded bg-white shadow-sm">
            <h6 className="text-muted">Dependency [count]</h6>
            <h2 className="text-success fw-bold">{runOnCountChange.current}</h2>
            <small>Runs when Count changes</small>
          </div>
        </div>
      </div>

      <h2 className="fw-bold text-dark mb-4">Main Count: {count}</h2>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        <button
          className="btn btn-success px-4 py-2 fw-bold shadow-sm"
          onClick={() => setCount(count + 1)}
        >
          Increase Count
        </button>

        <button
          className="btn btn-warning px-4 py-2 fw-bold shadow-sm text-dark"
          onClick={() => setOtherState(otherState + 1)}
        >
          Force Re-render (Other State)
        </button>
      </div>
    </div>
  );
}

export default UseEffectDemo;