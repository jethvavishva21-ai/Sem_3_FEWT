import { useState } from "react";

function L16_A2() {
  const [inputText, setInputText] = useState("");
  const [clickedMessage, setClickedMessage] = useState("");

  const handleButtonClick = () => {
    setClickedMessage("Button was clicked successfully!");
  };

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">2. Event Handling in React</h4>

      <div className="mb-3">
        <label className="form-label fw-bold">onChange Event:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Type something here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="mt-2 text-secondary">
          Live Input: <strong>{inputText || "(empty)"}</strong>
        </div>
      </div>

      <hr />

      <div>
        <label className="form-label fw-bold d-block">onClick Event:</label>
        <button className="btn btn-primary me-2" onClick={handleButtonClick}>
          Click Me
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={() => {
            setInputText("");
            setClickedMessage("");
          }}
        >
          Clear
        </button>
      </div>

      {clickedMessage && (
        <div className="alert alert-success mt-3 mb-0">{clickedMessage}</div>
      )}
    </div>
  );
}
export default L16_A2;