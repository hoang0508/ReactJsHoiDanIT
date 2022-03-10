import React from "react";
import "./AddNewProduct.scss";
const AddNewProduct = () => {
  return (
    <form className="form">
      <h1 className="form-title">Add New Product</h1>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="price">
          Price
        </label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Size
        </label>
        <input type="text" className="form-input" />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          Color
        </label>
        <input type="text" className="form-input" />
      </div>
      <div>
        <button className="form-btn">Add New Product</button>
      </div>
    </form>
  );
};

export default AddNewProduct;
