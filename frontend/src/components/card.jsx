import React from "react";
const Card = ({ en, title, ram, core, price, onBuy }) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <h3 className="ram">
          <span className="count">{ram}</span>GB Ram
        </h3>
        <h4 className="cpu">{core} Core</h4>
        <h4 className="price">
          Recurring Price{" "}
          <span className="taka">{en ? "$" + price : price + " taka"}</span>
        </h4>

        <h4 className="price">Billed Monthly</h4>
        <h4 className="price">
          Default Ports are additional {en ? "$5" : "400 taka"}
        </h4>
        <h4 className="price">
          5GB Storage Free({en ? "$1" : "100 taka"} per 5GB Extra)
        </h4>
      </div>
      <a onClick={onBuy} className="btn buy">
        Buy Now
      </a>
    </div>
  );
};

export default Card;
