import React, { useState } from "react";

function Faculties() {
  const [faculties, setFaculties] = useState([]);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const setData = () => {
    if (name.trim() === "" || subject.trim() === "") {
      alert("Please enter Faculty Name & Subject");
      return;
    }

    let temp = [...faculties];

    if (editIndex === -1) {
      temp.push({ name, subject }); 
    } else {
      temp[editIndex] = { name, subject }; 
      setEditIndex(-1);
    }

    setFaculties(temp);
    setName("");
    setSubject("");
  };
  
  const editData = (index) => {
    setName(faculties[index].name);
    setSubject(faculties[index].subject);
    setEditIndex(index);
  };

  const deleteData = (index) => {
    let temp = [...faculties];
    temp.splice(index, 1);
    setFaculties(temp);

    if (editIndex === index) {
      setEditIndex(-1);
      setName("");
      setSubject("");
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
          Faculty CRUD Operations
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
            type="text"
            placeholder="Faculty Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "16px",
              width: "40%",
              outline: "none",
            }}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{
              padding: "10px",
              border: "1px solid #ced4da",
              borderRadius: "5px",
              fontSize: "16px",
              width: "40%",
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
                Faculty Name
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
                Subject
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
            {faculties.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  style={{
                    padding: "15px",
                    border: "1px solid #dee2e6",
                    color: "#6c757d",
                  }}
                >
                  No faculty records added yet.
                </td>
              </tr>
            ) : (
              faculties.map((item, index) => (
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
                    {item.name}
                  </td>
                  <td
                    style={{
                      border: "1px solid #dee2e6",
                      padding: "12px",
                      textAlign: "center",
                    }}
                  >
                    {item.subject}
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

export default Faculties;