import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://6ab4cb5f24ee9d3caa1bb721.mockapi.io/book";

function ManageBooks() {
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setBooks(data);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" }).then(() => {
      fetchBooks();
    });
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Library Catalog Management</h4>
        <Link to="/lab26/add" className="btn btn-success btn-sm">
          + Add New Book
        </Link>
      </div>

      <table className="table table-bordered table-hover bg-white shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Cover</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>
                <img
                  src={b.cover || "https://via.placeholder.com/50"}
                  alt="cover"
                  width="40"
                  height="55"
                  style={{ objectFit: "cover" }}
                />
              </td>
              <td>{b.title}</td>
              <td>{b.author}</td>
              <td>{b.category}</td>
              <td>
                <span
                  className={`badge ${b.status === "Available" ? "bg-success" : "bg-warning text-dark"}`}
                >
                  {b.status}
                </span>
              </td>
              <td>
                <Link
                  to={`/lab26/edit/${b.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageBooks;
