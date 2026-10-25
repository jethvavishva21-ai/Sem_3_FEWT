import React from 'react'

function L14_A3() {
  const name = "React Developer";
  const num1 = 15;
  const num2 = 25;
  const isLoggedIn = true;
  const skills = [
    "Components",
    "JSX Syntax",
    "Virtual DOM",
    "Bootstrap Integration",
  ];

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">3. JSX Features Demonstration</h4>

      <div className="row g-3">
        <div className="col-md-6">
          <div className="p-3 bg-light border rounded">
            <h6 className="text-dark fw-bold">Embedding Expressions:</h6>
            <p className="mb-1">
              Greeting: <strong>Hello, {name}!</strong>
            </p>
            <p className="mb-0">
              Math Expression ({num1} + {num2}): <strong>{num1 + num2}</strong>
            </p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-3 bg-light border rounded">
            <h6 className="text-dark fw-bold">Ternary Operator (Condition):</h6>
            <p className="mb-0">
              Status:{" "}
              {isLoggedIn ? (
                <span className="badge bg-success">User is Logged In</span>
              ) : (
                <span className="badge bg-danger">Guest</span>
              )}
            </p>
          </div>
        </div>

        <div className="col-12">
          <div className="p-3 bg-light border rounded">
            <h6 className="text-dark fw-bold">Rendering Lists using Map:</h6>
            <ul className="list-group list-group-flush">
              {skills.map((skill, index) => (
                <li key={index} className="list-group-item bg-transparent py-1">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default L14_A3