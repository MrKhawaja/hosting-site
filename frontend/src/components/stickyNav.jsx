import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Lang from "./lang";
import CartCount from "./cartCount";
import { Link } from "react-router-dom";

const StickyNav = ({ lang, onLangChange, cartCount }) => {
  const [opacity, setOpacity] = useState();
  const [display, setDisplay] = useState();
  useScrollPosition(({ prevPos, currPos }) => {
    if (-(currPos.y / 265) - 1 > 0) setDisplay("block");
    if (-(currPos.y / 265) - 1 < 0) setDisplay("none");

    if (-(currPos.y / 265) - 1 > 0 && -(currPos.y / 265) - 1 < 1) {
      setOpacity(-(currPos.y / 265) - 1);
    }
    if (-(currPos.y / 265) - 1 > 1) setOpacity(1);
  });
  return (
    <>
      <nav style={{ opacity, display }} className="nav">
        <img src="logo.svg" className="logo" alt="" srcset="" />
        <span className="nav-icon">
          <Lang
            className="nav-link"
            lang={lang}
            style={{ fontSize: "1rem" }}
            onLangChange={onLangChange}
          />
          <CartCount
            style={{ fontSize: "1rem" }}
            className="nav-link"
            cartCount={cartCount}
          />
        </span>
        <div className="nav-links">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/packages" className="nav-link">
            Packages
          </Link>
          <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
            Discord
          </a>
          <Lang className="nav-link" lang={lang} onLangChange={onLangChange} />
          <CartCount className="nav-link" cartCount={cartCount} />
        </div>
      </nav>
    </>
  );
};

export default StickyNav;
