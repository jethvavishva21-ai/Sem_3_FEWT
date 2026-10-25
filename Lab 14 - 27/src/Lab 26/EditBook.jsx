import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://6ab4cb5f24ee9d3caa1bb721.mockapi.io/book"; // તમારી MockAPI લિંક અહીં મૂકો

function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    author: "",
    category: "",
    cover: "",
    status: "Available",
  });

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((resData) => setData(resData));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      navigate("/lab26/manage");
    });
  };

  return (
    <div className="container py-4" style={{ maxWidth: "500px" }}>
      <div className="card p-4 shadow-sm">
        <h4 className="mb-3">Edit Book Details</h4>
        <form onSubmit={handleUpdate}>
          <div className="mb-2">
            <label>Book Title</label>
            <input
              type="text"
              className="form-control"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label>Author Name</label>
            <input
              type="text"
              className="form-control"
              value={data.author}
              onChange={(e) => setData({ ...data, author: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              value={data.category}
              onChange={(e) => setData({ ...data, category: e.target.value })}
            />
          </div>

          <div className="mb-2">
            <label>Cover Image URL</label>
            <input
              type="text"
              className="form-control"
              value={data.cover}
              onChange={(e) => setData({ ...data, cover: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label>Status</label>
            <select
              className="form-select"
              value={data.status}
              onChange={(e) => setData({ ...data, status: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
            </select>
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBook;