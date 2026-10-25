import { Link, Outlet } from "react-router-dom";

function App17() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 17 : Map Method in ReactJS
        </h2>
        <nav className="nav nav-pills justify-content-center gap-2 flex-wrap">
          <Link className="nav-link border" to="a1">
            1. Array Map
          </Link>
          <Link className="nav-link border" to="b1">
            2. Faculties
          </Link>
          <Link className="nav-link border" to="b2">
            3. Students
          </Link>
          <Link className="nav-link border" to="c1">
            4. Products
          </Link>
        </nav>
      </div>
      <div className="card-body bg-light p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App17;
