import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import sneaker1 from "../../assets/images/sneaker1.jpg";
import sneaker2 from "../../assets/images/sneaker2.jpg";
import sneaker3 from "../../assets/images/sneaker3.jpg";
import sneaker4 from "../../assets/images/sneaker4.jpg";

import "./Product.scss";
const Product = () => {
  // image
  const images = [sneaker1, sneaker2, sneaker3, sneaker4];
  // Count
  const [count, setCount] = useState(0);
  const handleClickMinus = (e) => {
    e.preventDefault();
    if (count >= 1) {
      setCount(() => count - 1);
    }
  };
  const handleClickPlus = (e) => {
    e.preventDefault();
    setCount(() => count + 1);
  };
  // currenImage
  const [currenImage, setCurrenImage] = useState(sneaker1);
  // open show
  const [isOpen, setIsOpen] = useState(false);
  // photo index
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <>
      <div className="product">
        <div className="product-list">
          <div className="product-item-top">
            <img src={currenImage} alt="" />
          </div>
          <div className="product-item-bottom">
            <div className="product-item-image">
              <img
                src={sneaker1}
                alt=""
                onClick={() => setCurrenImage(sneaker1)}
              />
            </div>
            <div className="product-item-image">
              <img
                src={sneaker2}
                alt=""
                onClick={() => setCurrenImage(sneaker2)}
              />
            </div>
            <div className="product-item-image">
              <img
                src={sneaker3}
                alt=""
                onClick={() => setCurrenImage(sneaker3)}
              />
            </div>
            <div className="product-item-image">
              <img
                src={sneaker4}
                alt=""
                onClick={() => setCurrenImage(sneaker4)}
              />
            </div>
          </div>
        </div>
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
              <button
                className="product-btn"
                onClick={(e) => handleClickPlus(e)}
              >
                <FaPlus className="product-icon" />
              </button>
            </div>
          </div>
          <div>
            <button className="product-buy">Chọn mua</button>
          </div>
        </div>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      )}
    </>
  );
};

export default Product;
