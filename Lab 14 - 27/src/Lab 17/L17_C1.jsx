import React from 'react'

function L17_C1() {
  const products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      price: 2999,
      category: "Electronics",
      inStock: true,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 899,
      category: "Electronics",
      inStock: false,
    },
    {
      id: 3,
      name: "Desk Mat",
      price: 499,
      category: "Accessories",
      inStock: true,
    },
  ];

  return (
    <div className="card shadow-sm border-0 p-4">
      <h4 className="text-primary mb-3">4. Product Catalog</h4>
      <div className="row g-3">
        {products.map((prod) => (
          <div key={prod.id} className="col-md-4">
            <div className="card h-100 shadow-sm border">
              <div className="card-body d-flex flex-column">
                <span className="badge bg-secondary align-self-start mb-2">
                  {prod.category}
                </span>
                <h5 className="card-title">{prod.name}</h5>
                <h4 className="text-success mt-auto mb-2">₹{prod.price}</h4>
                <div>
                  {prod.inStock ? (
                    <span className="badge bg-success">In Stock</span>
                  ) : (
                    <span className="badge bg-danger">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default L17_C1
