import { Link, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./AuthContext";

function LayoutContent() {
  const { user, logout } = useAuth();

  return (
    <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
      {/* Header & Navbar */}
      <div className="card-header bg-white border-bottom pt-4 pb-3">
        <div className="d-flex justify-content-between align-items-center flex-wrap px-3 mb-3">
          <h3 className="text-primary fw-bold mb-2 mb-md-0">
            Lab 25 : Static Auth with useContext
          </h3>

          {/* User state badge on layout header */}
          <div>
            {user ? (
              <div className="d-flex align-items-center gap-2">
                <span className="badge bg-success p-2">
                  Logged in: {user.username}
                </span>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            ) : (
              <span className="badge bg-secondary p-2">
                Status: Guest (Not Logged In)
              </span>
            )}
          </div>
        </div>

        {/* Tab Navigation */}
        <nav className="nav nav-pills justify-content-center gap-2 flex-wrap">
          <Link className="nav-link border" to="login">
            Login
          </Link>
          <Link className="nav-link border" to="profile">
            User Profile
          </Link>
          <Link className="nav-link border" to="dashboard">
            Dashboard
          </Link>
        </nav>
      </div>

      {/* Dynamic Content */}
      <div className="card-body bg-light p-4 p-md-5">
        <Outlet />
      </div>
    </div>
  );
}

function App25() {
  return (
    <AuthProvider>
      <LayoutContent />
    </AuthProvider>
  );
}

export default App25;