import React, { useState, useEffect } from "react";

const API_URL = "https://6ab4cb5f24ee9d3caa1bb721.mockapi.io/book"; 

function LibraryHome() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

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

  // Borrow / Return Status Toggle
  const handleBorrowToggle = (book) => {
    const newStatus = book.status === "Available" ? "Borrowed" : "Available";

    fetch(`${API_URL}/${book.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...book, status: newStatus }),
    }).then(() => fetchBooks());
  };

  const filteredBooks = books.filter(
    (b) =>
      b.title?.toLowerCase().includes(search.toLowerCase()) ||
      b.author?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="container py-4">
      {/* Welcome & Search Banner */}
      <div className="p-4 rounded shadow-sm bg-white border mb-4">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3 className="fw-bold" style={{ color: "#02598b" }}>
              Welcome to Open Library
            </h3>
            <p className="text-muted mb-0">
              Read Free Library Books Online. Track and borrow books easily.
            </p>
          </div>
          <div className="col-md-6 mt-3 mt-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search books by title or author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="row mb-4 text-center">
        <div className="col-md-4 mb-2">
          <div className="p-3 bg-white border rounded shadow-sm">
            <h6 className="fw-bold text-primary">📖 Read Free Books</h6>
            <small className="text-muted">
              Explore books from our MockAPI catalog
            </small>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="p-3 bg-white border rounded shadow-sm">
            <h6 className="fw-bold text-success">🔖 Track Your Reading</h6>
            <small className="text-muted">
              Organize your reading status live
            </small>
          </div>
        </div>
        <div className="col-md-4 mb-2">
          <div className="p-3 bg-white border rounded shadow-sm">
            <h6 className="fw-bold text-warning">🏛️ Digital Shelf</h6>
            <small className="text-muted">
              One-click Borrow and Return system
            </small>
          </div>
        </div>
      </div>

      {/* Book Shelf */}
      <div className="p-4 bg-white border rounded shadow-sm">
        <h5
          className="fw-bold border-bottom pb-2 mb-3"
          style={{ color: "#02598b" }}
        >
          Trending Books in Library
        </h5>

        <div className="row">
          {filteredBooks.length === 0 ? (
            <p className="text-muted">
              No books found. Click "+ Add Book" to add some!
            </p>
          ) : (
            filteredBooks.map((book) => (
              <div
                className="col-6 col-md-3 col-lg-2 mb-4 text-center"
                key={book.id}
              >
                <div
                  className="card h-100 border-0"
                  style={{ backgroundColor: "#fdfbf7" }}
                >
                  <img
                    src={
                      book.cover ||
                      "https://via.placeholder.com/150x220?text=No+Cover"
                    }
                    alt={book.title}
                    className="card-img-top rounded shadow-sm"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body p-2 d-flex flex-column">
                    <h6 className="card-title mb-1 text-truncate">
                      {book.title}
                    </h6>
                    <small className="text-muted mb-2 text-truncate">
                      {book.author}
                    </small>

                    <button
                      onClick={() => handleBorrowToggle(book)}
                      className={`btn btn-sm mt-auto w-100 fw-bold ${
                        book.status === "Available"
                          ? "btn-primary"
                          : "btn-secondary"
                      }`}
                    >
                      {book.status === "Available" ? "Borrow" : "Return"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default LibraryHome;