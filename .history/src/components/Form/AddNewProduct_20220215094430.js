import React from "react";

const AddNewProduct = () => {
  return (
    <form className="form">
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
    </form>
  );
};

export default AddNewProduct;
