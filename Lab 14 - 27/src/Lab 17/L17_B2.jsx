import React from 'react'

function L17_B2() {
  const students = [
    { enrollment: "23010101001", name: "Aarav Mehta", sem: 4, spi: 8.5 },
    { enrollment: "23010101002", name: "Diya Joshi", sem: 4, spi: 9.1 },
    { enrollment: "23010101003", name: "Kavya Sharma", sem: 4, spi: 7.9 },
  ];

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">3. Student Records</h4>
      <div className="row g-3">
        {students.map((student) => (
          <div key={student.enrollment} className="col-md-4">
            <div className="card h-100 border-primary border-top border-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-primary mb-1">{student.name}</h5>
                <h6 className="card-subtitle text-muted mb-3">
                  Enr: {student.enrollment}
                </h6>
                <p className="card-text mb-1">
                  Semester: <strong>{student.sem}</strong>
                </p>
                <p className="card-text mb-0">
                  SPI: <span className="badge bg-success">{student.spi}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default L17_B2
