import { useAuth } from "./AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">Dashboard Overview</h4>
      <p className="text-secondary">
        This view checks user authentication globally via{" "}
        <code>useContext</code>.
      </p>

      {user ? (
        <div className="p-3 bg-light border border-success rounded">
          <h6 className="text-success fw-bold">
            Welcome back, {user.username}!
          </h6>
          <p className="mb-0 text-muted">
            You have access to all layout resources and administrative
            privileges.
          </p>
        </div>
      ) : (
        <div className="p-3 bg-light border border-secondary rounded">
          <h6 className="text-muted fw-bold">Public Visitor View</h6>
          <p className="mb-0 text-muted">
            You are viewing this as an unauthenticated guest user.
          </p>
        </div>
      )}
    </div>
  );
}
export default Dashboard;