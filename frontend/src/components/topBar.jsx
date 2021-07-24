import React from "react";
import { Link } from "react-router-dom";
const TopBar = ({}) => {
  return (
    <div className="top-bar">
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
      <a href="https://panel.alveehawak.xyz">panel</a>
    </div>
  );
};

export default TopBar;
