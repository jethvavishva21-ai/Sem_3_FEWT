import { useState } from "react";

function App27() {
  const [students, setStudents] = useState([
    { id: "230101001", name: "Rahul Sharma", status: "" },
    { id: "230101002", name: "Priya Patel", status: "" },
    { id: "230101003", name: "Amit Kumar", status: "" },
    { id: "230101004", name: "Neha Gupta", status: "" },
  ]);

  const markAttendance = (id, newStatus) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status: newStatus } : student,
      ),
    );
  };

  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-success text-white pt-4 pb-3">
        <h2 className="mb-0 text-center fw-bold">
          Lab 27 : Attendance Management
        </h2>
      </div>
      <div className="card-body bg-light p-4">
        {/* Attendance Summary */}
        <div className="row mb-4 text-center">
          <div className="col-md-4">
            <div className="p-3 bg-white border rounded shadow-sm">
              <h5 className="text-muted">Total Students</h5>
              <h3 className="text-primary mb-0">{students.length}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-white border rounded shadow-sm">
              <h5 className="text-muted">Present</h5>
              <h3 className="text-success mb-0">{presentCount}</h3>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 bg-white border rounded shadow-sm">
              <h5 className="text-muted">Absent</h5>
              <h3 className="text-danger mb-0">{absentCount}</h3>
            </div>
          </div>
        </div>

        {/* Student List */}
        <div className="table-responsive bg-white rounded shadow-sm border">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-dark">
              <tr>
                <th>Enrollment No</th>
                <th>Student Name</th>
                <th className="text-center">Current Status</th>
                <th className="text-center">Mark Attendance</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td className="fw-semibold">{student.name}</td>
                  <td className="text-center">
                    {student.status === "Present" && (
                      <span className="badge bg-success">Present</span>
                    )}
                    {student.status === "Absent" && (
                      <span className="badge bg-danger">Absent</span>
                    )}
                    {student.status === "" && (
                      <span className="badge bg-secondary">Not Marked</span>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      className={`btn btn-sm me-2 ${student.status === "Present" ? "btn-success" : "btn-outline-success"}`}
                      onClick={() => markAttendance(student.id, "Present")}
                    >
                      Present
                    </button>
                    <button
                      className={`btn btn-sm ${student.status === "Absent" ? "btn-danger" : "btn-outline-danger"}`}
                      onClick={() => markAttendance(student.id, "Absent")}
                    >
                      Absent
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App27;