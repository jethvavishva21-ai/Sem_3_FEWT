import { Link, Outlet } from "react-router-dom";

function App16() {
  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <h2 className="mb-4 text-primary text-center fw-bold">
          Lab 16 : Props & Event Handling
        </h2>
        <nav className="nav nav-pills justify-content-center gap-2 flex-wrap">
          <Link className="nav-link border" to="a1">
            1. Props Demo
          </Link>
          <Link className="nav-link border" to="a2">
            2. Event Handling
          </Link>
          <Link className="nav-link border" to="a3">
            3. Conditional Rendering
          </Link>
        </nav>
      </div>
      <div className="card-body bg-light p-4">
        <Outlet />
      </div>
    </div>
  );
}
export default App16;