import { useState } from "react";

function ConditionalCard({ title, content, isDisplay }) {
  if (!isDisplay) {
    return null;
  }

  return (
    <div className="alert alert-info border-info mb-2">
      <h5 className="alert-heading">{title}</h5>
      <p className="mb-0">{content}</p>
    </div>
  );
}

function L16_A3() {
  const [showItem, setShowItem] = useState(true);

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">
        3. Conditional Rendering (isDisplay attribute)
      </h4>

      <div className="form-check form-switch mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="toggleDisplay"
          checked={showItem}
          onChange={() => setShowItem(!showItem)}
        />
        <label className="form-check-label fw-semibold" htmlFor="toggleDisplay">
          Toggle `isDisplay` state:{" "}
          <span className="badge bg-dark">{showItem ? "true" : "false"}</span>
        </label>
      </div>

      <ConditionalCard
        title="Active Notice"
        content="This element is visible because `isDisplay` is true."
        isDisplay={showItem}
      />
      <ConditionalCard
        title="Hidden Element"
        content="This will never be seen because `isDisplay={false}`."
        isDisplay={false}
      />
    </div>
  );
}
export default L16_A3;