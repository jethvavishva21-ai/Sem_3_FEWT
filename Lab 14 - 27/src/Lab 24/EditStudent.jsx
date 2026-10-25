import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = `https://62d6c51451e6e8f06f12bd5d.mockapi.io/students/${id}`;

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

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error("Error fetching data:", err));
  }, [apiUrl]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(apiUrl, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/lab24/students"); 
      })
      .catch((err) => console.error("Error updating student:", err));
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">Edit Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="StudentName"
                value={data.StudentName}
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
                value={data.StudentImage}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Roll No</label>
              <input
                type="text"
                className="form-control"
                name="StudentRollNo"
                value={data.StudentRollNo}
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
                value={data.StudentMobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Semester</label>
              <input
                type="text"
                className="form-control"
                name="StudentSemester"
                value={data.StudentSemester}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Age</label>
              <input
                type="text"
                className="form-control"
                name="StudentAge"
                value={data.StudentAge}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="StudentDepartment"
                value={data.StudentDepartment}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Building Number</label>
              <input
                type="text"
                className="form-control"
                name="StudentBuildingNumber"
                value={data.StudentBuildingNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                name="StudentCity"
                value={data.StudentCity}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">State</label>
              <input
                type="text"
                className="form-control"
                name="StudentState"
                value={data.StudentState}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mt-4">
            <button type="submit" className="btn btn-warning me-2">
              Update Student
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

export default EditStudent;