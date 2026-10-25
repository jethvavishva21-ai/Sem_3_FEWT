import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://6ab4cb5f24ee9d3caa1bb721.mockapi.io/book"; // તમારી MockAPI લિંક અહીં મૂકો

function AddBook() {
  const [data, setData] = useState({
    title: "",
    author: "",
    category: "Programming",
    cover: "",
    status: "Available",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/lab26");
    });
  };

  return (
    <div className="container py-4" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Add New Book</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label>Book Title</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label>Author Name</label>
            <input
              type="text"
              className="form-control"
              required
              onChange={(e) => setData({ ...data, author: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label>Category</label>
            <select
              className="form-select"
              onChange={(e) => setData({ ...data, category: e.target.value })}
            >
              <option value="Programming">Programming</option>
              <option value="Fiction">Fiction</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Cover Image URL</label>
            <input
              type="text"
              className="form-control"
              placeholder="Paste image link here..."
              onChange={(e) => setData({ ...data, cover: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;