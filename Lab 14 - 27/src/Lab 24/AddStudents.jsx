import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/students";

  const [data, setData] = useState({
    StudentName: "",
    StudentImage: "",
    StudentRollNo: "",
    StudentMobileNumber: "",
    StudentSemester: "",
    StudentAge: "",
    StudentDepartment: "",
    StudentBuildingNumber: "",
    StudentCity: "",
    StudentState: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/lab24/students");
      })
      .catch((err) => console.error("Error adding student:", err));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="StudentName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="StudentImage"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Roll No</label>
              <input
                type="text"
                className="form-control"
                name="StudentRollNo"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input
                type="text"
                className="form-control"
                name="StudentMobileNumber"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Semester</label>
              <input
                type="text"
                className="form-control"
                name="StudentSemester"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                name="StudentAge"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="StudentDepartment"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Building Number</label>
              <input
                type="text"
                className="form-control"
                name="StudentBuildingNumber"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="StudentCity"
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                name="StudentState"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-success me-2">
              Save Student
            </button>
            <Link to="/lab24/students" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;