import { useState, useEffect } from "react";

function Faculty_MockApi() {
  const url = "https://6aa8eb5d2d442cb69d492765.mockapi.io/Faculty";

  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [editId, setEditId] = useState(null);

  // GET
  function getFaculties() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFaculties(data));
  }

  useEffect(() => {
    getFaculties();
  }, []);

  // POST and PUT
  function saveFaculty(e) {
    e.preventDefault();
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    const faculty = { name, email, image };

    if (editId === null) {
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faculty),
      }).then(() => {
        getFaculties();
        resetForm();
      });
    } else {
      fetch(url + "/" + editId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(faculty),
      }).then(() => {
        getFaculties();
        resetForm();
      });
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setImage("");
    setEditId(null);
  }

  // EDIT
  function editFaculty(faculty) {
    setName(faculty.name);
    setEmail(faculty.email);
    setImage(faculty.image || "");
    setEditId(faculty.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // DELETE
  function deleteFaculty(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      fetch(url + "/" + id, {
        method: "DELETE",
      }).then(() => getFaculties());
    }
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <h1 style={styles.heading}>Faculty Management</h1>

      {/* Form Card */}
      <div style={styles.formCard}>
        <h3 style={{ marginTop: 0, marginBottom: "15px", color: "#333" }}>
          {editId === null ? "➕ Add New Faculty" : "✏️ Update Faculty"}
        </h3>
        <form onSubmit={saveFaculty} style={styles.form}>
          <input
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            placeholder="Image URL (optional)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit" style={styles.primaryBtn}>
              {editId === null ? "Add Faculty" : "Save Changes"}
            </button>
            {editId !== null && (
              <button
                type="button"
                onClick={resetForm}
                style={styles.cancelBtn}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Faculty Cards Grid */}
      <h2 style={{ color: "#333", marginTop: "30px" }}>
        Faculty List ({faculties.length})
      </h2>

      <div style={styles.grid}>
        {faculties.map((faculty) => (
          <div key={faculty.id} style={styles.card}>
            <img
              src={
                faculty.image || "https://via.placeholder.com/100?text=No+Image"
              }
              alt={faculty.name}
              style={styles.avatar}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/100?text=No+Image";
              }}
            />
            <h3 style={styles.cardName}>{faculty.name}</h3>
            <p style={styles.cardEmail}>{faculty.email}</p>
            <span style={styles.badge}>ID: #{faculty.id}</span>

            <div style={styles.btnGroup}>
              <button
                onClick={() => editFaculty(faculty)}
                style={styles.editBtn}
              >
                Edit
              </button>
              <button
                onClick={() => deleteFaculty(faculty.id)}
                style={styles.deleteBtn}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Styling Object
const styles = {
  container: {
    maxWidth: "1000px",
    margin: "30px auto",
    padding: "0 20px",
    fontFamily: "'Segoe UI', Roboto, Helvetica, sans-serif",
  },
  heading: {
    textAlign: "center",
    color: "#1e293b",
    marginBottom: "25px",
  },
  formCard: {
    backgroundColor: "#ffffff",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },
  form: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  input: {
    flex: "1 1 200px",
    padding: "10px 14px",
    borderRadius: "6px",
    border: "1px solid #cbd5e1",
    fontSize: "14px",
    outline: "none",
  },
  primaryBtn: {
    padding: "10px 20px",
    backgroundColor: "#3b82f6",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  cancelBtn: {
    padding: "10px 16px",
    backgroundColor: "#64748b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "15px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
    border: "1px solid #f1f5f9",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    backgroundColor: "#e2e8f0",
    marginBottom: "12px",
  },
  cardName: {
    margin: "0 0 5px 0",
    fontSize: "16px",
    color: "#0f172a",
  },
  cardEmail: {
    margin: "0 0 10px 0",
    fontSize: "13px",
    color: "#64748b",
    wordBreak: "break-all",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#f1f5f9",
    color: "#475569",
    fontSize: "12px",
    padding: "3px 8px",
    borderRadius: "4px",
    marginBottom: "15px",
  },
  btnGroup: {
    display: "flex",
    gap: "8px",
    width: "100%",
    marginTop: "auto",
  },
  editBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#fef3c7",
    color: "#b45309",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
  deleteBtn: {
    flex: 1,
    padding: "8px",
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Faculty_MockApi;