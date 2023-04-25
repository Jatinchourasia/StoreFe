import React from "react";
import "./Card.scss";
export const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="card">
      <div className="discount"> 55% off</div>
      <div className="productImg">
        <img
          src={`${
            item.image
              ? item.image.src
              : "https://opsg-img-cdn-gl.heytapimg.com/epb/202205/26/SlQAL98XOlhHGMfN.png"
          }`}
          alt=""
        />
      </div>
      <div className="description">
        <p className="name">OPPO Enco W51</p>
        <p className="mor">Noise off world on</p>
        <p className="price">
          3999.00<span>4000</span>
        </p>
      </div>
      <div className="btns">
        <button className="cart">Add to Cart</button>
        <button className="buy">Buy Now</button>
      </div>
    </div>
  );
};
