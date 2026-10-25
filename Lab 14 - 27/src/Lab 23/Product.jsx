import React, { useState } from "react";

function Product() {
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const setData = () => {
    if (name === "" || price === "") {
      alert("Please enter Name & Price");
      return;
    }

    let temp = [...products];

    if (editIndex === -1) {
      temp.push({ name: name, price: price });
    } else {
      temp[editIndex] = { name: name, price: price };
      setEditIndex(-1);
    }

    setProducts(temp);
    setName("");
    setPrice("");
  };

  const editData = (index) => {
    setName(products[index].name);
    setPrice(products[index].price);
    setEditIndex(index);
  };

  const deleteData = (index) => {
    let temp = [...products];
    temp.splice(index, 1);
    setProducts(temp);

    if (editIndex === index) {
      setEditIndex(-1);
      setName("");
      setPrice("");
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
        padding: "10px 20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#f4f7f6",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "20px" }}>
          Product CRUD Operations
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
            placeholder="Enter Name"
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
            type="number"
            placeholder="Enter Price"  
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
              backgroundColor: editIndex === -1 ? "#28a745" : "#ffc107", // Add હોય તો લીલો, Update હોય તો પીળો કલર
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
                ID
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
                Price
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
            {products.map((item, index) => (
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
                  ₹{item.price}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Product;