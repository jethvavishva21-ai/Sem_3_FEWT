import React, { useState } from "react";

function Student() {
  const [students, setStudents] = useState([]);
  const [rollNo, setRollNo] = useState(""); // બધે rollNo વાપર્યું
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const setData = () => {
    if (rollNo.trim() === "" || name.trim() === "") {
      alert("Please Enter Roll No & Student Name");
      return;
    }

    let temp = [...students];

    if (editIndex === -1) {
      temp.push({ rollNo, name }); // અહી પણ rollNo
    } else {
      temp[editIndex] = { rollNo, name }; // અહી પણ rollNo
      setEditIndex(-1);
    }

    setStudents(temp);
    setRollNo("");
    setName("");
  };

  const editData = (index) => {
    setRollNo(students[index].rollNo);
    setName(students[index].name);
    setEditIndex(index);
  };

  const deleteData = (index) => {
    let temp = [...students];
    temp.splice(index, 1);
    setStudents(temp);

    if (editIndex === index) {
      setEditIndex(-1);
      setRollNo("");
      setName("");
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px 0",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "650px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "20px" }}>
          Student CRUD Operations
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="number"
            placeholder="Roll No"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "16px",
              width: "30%",
              outline: "none",
            }}
          />
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "16px",
              width: "50%",
              outline: "none",
            }}
          />
          <button
            onClick={setData}
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              color: editIndex === -1 ? "white" : "#212529",
              fontWeight: "bold",
              backgroundColor: editIndex === -1 ? "#28a745" : "#ffc107",
            }}
          >
            {editIndex === -1 ? "Add" : "Update"}
          </button>
        </div>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "1px solid #dee2e6",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                #
              </th>
              <th
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "1px solid #dee2e6",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                Roll No
              </th>
              <th
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "1px solid #dee2e6",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                Name
              </th>
              <th
                style={{
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "1px solid #dee2e6",
                  padding: "12px",
                  textAlign: "center",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    padding: "15px",
                    border: "1px solid #dee2e6",
                    color: "#6c757d",
                  }}
                >
                  No student records added yet.
                </td>
              </tr>
            ) : (
              students.map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "white" : "#f8f9fa",
                  }}
                >
                  <td
                    style={{
                      border: "1px solid #dee2e6",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {index + 1}
                  </td>
                  <td
                    style={{
                      border: "1px solid #dee2e6",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {item.rollNo}
                  </td>
                  <td
                    style={{
                      border: "1px solid #dee2e6",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid #dee2e6",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={() => editData(index)}
                      style={{
                        padding: "6px 12px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        color: "white",
                        margin: "0 5px",
                        fontSize: "14px",
                        backgroundColor: "#17a2b8",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(index)}
                      style={{
                        padding: "6px 12px",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        color: "white",
                        margin: "0 5px",
                        fontSize: "14px",
                        backgroundColor: "#dc3545",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Student;