function UserCard({ name, role, email }) {
  return (
    <div className="card shadow-sm border p-3 my-2">
      <h5 className="text-primary mb-1">{name}</h5>
      <span className="badge bg-secondary w-auto align-self-start mb-2">
        {role}
      </span>
      <p className="text-muted mb-0">Email: {email}</p>
    </div>
  );
}

function L16_A1() {
  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">1. Props Demonstration</h4>
      <p className="text-muted">Passing data from parent to child via props:</p>
      <div className="row g-3">
        <div className="col-md-6">
          <UserCard
            name="Rahul Sharma"
            role="Full Stack Developer"
            email="rahul@example.com"
          />
        </div>
        <div className="col-md-6">
          <UserCard
            name="Priya Patel"
            role="UI/UX Designer"
            email="priya@example.com"
          />
        </div>
      </div>
    </div>
  );
}

export default L16_A1