import { useAuth } from "./AuthContext";

function Profile() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div
        className="alert alert-warning text-center mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <h5 className="alert-heading">Access Restricted!</h5>
        <p className="mb-0">
          Please log in first using the Login tab to view your profile details.
        </p>
      </div>
    );
  }

  return (
    <div
      className="card shadow-sm border-0 mx-auto"
      style={{ maxWidth: "500px" }}
    >
      <div className="card-header bg-primary text-white text-center py-3">
        <h5 className="mb-0">Current User Profile</h5>
      </div>
      <div className="card-body p-4">
        <p className="mb-2">
          <strong>Username:</strong>{" "}
          <span className="text-primary">{user.username}</span>
        </p>
        <p className="mb-2">
          <strong>Role:</strong>{" "}
          <span className="badge bg-success">{user.role}</span>
        </p>
        <p className="mb-0">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default Profile;