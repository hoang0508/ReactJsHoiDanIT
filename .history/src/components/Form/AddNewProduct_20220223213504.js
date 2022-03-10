import React, { useState } from "react";
import "./AddNewProduct.scss";
const AddNewProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [size, setSize] = useState(0);
  const [color, setColor] = useState("");
  // show, hide
  const [isShowDetails, setShowDetails] = useState(true);
  const handleClickShow = () => {
    setShowDetails(!isShowDetails);
  };
  const handleClickProduct = (e) => {
    e.preventDefault();
    const object = { name, price, size, color };
    localStorage.setItem("product", object);
  };
  return (
    <>
      <span className="form-show" onClick={() => handleClickShow()}>
        {isShowDetails ? "Hide the form" : "Show the form"}
      </span>
      {isShowDetails ? (
        <form className="form">
          <h1 className="form-title">Add New Product</h1>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="price">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Size
            </label>
            <input
              value={size}
              onChange={(e) => setSize(e.target.value)}
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="name">
              Color
            </label>
            <input
              value={color}
              onChange={(e) => setColor(e.target.value)}
              type="text"
              className="form-input"
            />
          </div>
          <div>
            <button className="form-btn" onClick={(e) => handleClickProduct(e)}>
              Add New Product
            </button>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AddNewProduct;
