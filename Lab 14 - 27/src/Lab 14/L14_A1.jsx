import React from 'react'

function L14_A1() {
    return (
      <div className="card shadow-sm border-0 p-4">
        <h4 className="text-primary mb-3">
          1. ReactJS Development Environment Setup
        </h4>
        <p className="text-muted">
          Steps followed to set up this React application:
        </p>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item">
            Installed <strong>Node.js</strong> and npm on the machine.
          </li>
          <li className="list-group-item">
            Initialized React project using Vite:
            <code>npm create vite@latest project1 -- --template react</code>
          </li>
          <li className="list-group-item">
            Navigated into directory: <code>cd project1</code>
          </li>
          <li className="list-group-item">
            Installed dependencies: <code>npm install</code>
          </li>
          <li className="list-group-item">
            Installed Bootstrap & React Router DOM:
            <code>npm install bootstrap react-router-dom</code>
          </li>
          <li className="list-group-item">
            Started development server: <code>npm run dev</code>
          </li>
        </ol>
        <div className="alert alert-success mt-3 mb-0">
          Environment is active and running via Vite server!
        </div>
      </div>
    );
}

export default L14_A1
