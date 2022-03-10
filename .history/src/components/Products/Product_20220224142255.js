import React from "react";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import "./Product.scss";
const Product = () => {
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
            <button className="product-btn">
              <FaMinus />
            </button>
            <input type="text" />
            <button className="product-btn">
              <FaPlus />
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
