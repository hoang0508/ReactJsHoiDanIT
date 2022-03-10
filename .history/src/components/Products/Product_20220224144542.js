import React, { useState } from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./Product.scss";
const Product = () => {
  const [count, setCount] = useState(0);
  const handleClickMinus = (e) => {
    e.preventDefault();
    if (count > 1) {
      setCount(() => count - 1);
    }
  };
  const handleClickPlus = (e) => {
    e.preventDefault();
    setCount(() => count + 1);
  };
  return (
    <div className="product">
      <div className="product-list"></div>
      <div className="product-content">
        <div className="product-name">
          Giày chạy bộ nam New Balance - M860E11
        </div>
        <div className="product-price">1.846.000 ₫</div>
        <div className="product-size">
          Size: <span>30</span>
        </div>
        <div className="product-count">
          <div className="product-quantity">Số lượng</div>
          <div className="product-group">
            <button
              className="product-btn"
              onClick={(e) => handleClickMinus(e)}
            >
              <FaMinus className="product-icon" />
            </button>
            <input
              type="text"
              className="product-input"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
            <button className="product-btn" onClick={(e) => handleClickPlus(e)}>
              <FaPlus className="product-icon" />
            </button>
          </div>
        </div>
        <div>
          <button className="product-buy">Chọn mua</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
