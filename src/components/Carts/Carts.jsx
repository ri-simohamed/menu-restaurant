import React from "react";
import "./Carts.scss";

const Carts = ({ dataItem }) => {
  return (
    <>
    {dataItem.length >= 1 ? (dataItem.map((item) => (
    <div className="cart" key={item.id}>
      <div className="left-cart" >
        <h1>{item.Name}</h1>
        <img
          src={item.img}
          alt=""
        />
      </div>
      <div className="right-cart">
        <span>{item.price} dh</span>
        <p>
          {item.dsc}
        </p>
      </div>
    </div>
      ))): <h2 className="announce">No Data Found!</h2>}
      </>
  );
};

export default Carts;
