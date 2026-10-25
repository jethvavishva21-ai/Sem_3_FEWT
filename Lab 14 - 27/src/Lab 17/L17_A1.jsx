function L17_A1() {
  const skills = [
    "HTML5",
    "CSS3 / Bootstrap",
    "JavaScript",
    "ReactJS",
    "NodeJS",
  ];

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">1. Map Method on Simple Array</h4>
      <ul className="list-group">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{skill}</span>
            <span className="badge bg-primary rounded-pill">
              Index: {index}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default L17_A1;