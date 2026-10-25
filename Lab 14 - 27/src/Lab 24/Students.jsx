import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Students List</h2>
        <Link to="/lab24/students/add" className="btn btn-success">
          + Add New Student
        </Link>
      </div>
      <div className="row g-4">
        {data.map((stu) => {
          return (
            <div className="col-md-3 col-sm-6" key={stu.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={stu.StudentImage}
                  className="card-img-top"
                  alt={stu.StudentName}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{stu.StudentName}</h5>
                  <p className="card-text text-muted">
                    Roll: {stu.StudentRollNo}
                  </p>
                  <Link
                    to={`/lab24/students/${stu.id}`}
                    className="btn btn-primary mt-auto"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Students;