import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function DetailStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const apiUrl = `https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/${id}`;
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching details:", err));
  }, [id]);

  const handleDelete = () => {
    fetch(apiUrl, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        navigate("/lab24/students");
      })
      .catch((err) => console.error("Error deleting student:", err));
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              className="img-fluid rounded"
              src={data.StudentImage}
              alt={data.StudentName}
              style={{ maxHeight: "350px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <h2>
              {data.StudentName}{" "}
              <small className="text-muted">({data.StudentRollNo})</small>
            </h2>
            <hr />
            <p>
              <strong>Mobile:</strong> {data.StudentMobileNumber}
            </p>
            <p>
              <strong>Semester:</strong> {data.StudentSemester}
            </p>
            <p>
              <strong>Age:</strong> {data.StudentAge}
            </p>
            <p>
              <strong>Department:</strong> {data.StudentDepartment}
            </p>
            <p>
              <strong>Building:</strong> {data.StudentBuildingNumber}
            </p>
            <p>
              <strong>Location:</strong> {data.StudentCity}, {data.StudentState}
            </p>
            <p className="text-muted">
              <small>Created: {data.createdAt}</small>
            </p>

            <div className="mt-4">
              <Link className="btn btn-secondary me-2" to="/lab24/students">
                Back
              </Link>
              <Link
                className="btn btn-warning me-2"
                to={`/lab24/students/edit/${id}`}
              >
                Edit
              </Link>
              <button className="btn btn-danger" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailStudent;