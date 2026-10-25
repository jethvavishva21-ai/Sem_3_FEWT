import React from 'react'

function L17_B1() {
  const faculties = [
    {
      id: 101,
      name: "Dr. K. S. Trivedi",
      subject: "Data Structures",
      experience: "12 Years",
    },
    {
      id: 102,
      name: "Prof. N. M. Shah",
      subject: "Web Technologies",
      experience: "8 Years",
    },
    {
      id: 103,
      name: "Prof. R. V. Dave",
      subject: "Database Management",
      experience: "6 Years",
    },
  ];

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">2. Faculty List</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle mb-0">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Faculty Name</th>
              <th>Subject</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {faculties.map((fac) => (
              <tr key={fac.id}>
                <td>{fac.id}</td>
                <td className="fw-semibold">{fac.name}</td>
                <td>
                  <span className="badge bg-info text-dark">{fac.subject}</span>
                </td>
                <td>{fac.experience}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default L17_B1
