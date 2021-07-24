import React from "react";
import { Link } from "react-router-dom";

const CartCount = ({ style, cartCount, className }) => {
  return (
    <Link to="/cart" style={style} className={className}>
      Cart:{" "}
      <span
        style={{
          padding: ".4em .9em",
          backgroundColor: "#00000047",
          borderRadius: "1rem",
        }}
      >
        {cartCount}
      </span>
    </Link>
  );
};

export default CartCount;
