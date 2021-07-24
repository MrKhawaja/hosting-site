import React from "react";
import { Link } from "react-router-dom";
import CartCount from "./cartCount";
import Lang from "./lang";
import TopBar from "./topBar";

const Nav = ({ lang, onLangChange, cartCount, location }) => {
  function clickNav() {
    const element = document.getElementById("mobile-nav1");
    element.classList.toggle("active");
  }
  if (location.pathname == "/") return <></>;
  return (
    <>
      <TopBar />
      <nav style={{ backgroundColor: "rgba(244, 92, 67, 1)" }}>
        <img src="logo.svg" className="logo" alt="" srcset="" />
        <span className="material-icons nav-icon" onClick={clickNav}>
          reorder
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
          {location.pathname == "/cart" ? (
            <></>
          ) : (
            <Lang
              className="nav-link"
              lang={lang}
              onLangChange={onLangChange}
            />
          )}
          <CartCount className="nav-link" cartCount={cartCount} />
        </div>
      </nav>

      <div className="header-box">
        <div id="mobile-nav1" className="nav-links mobile">
          <Link to="/" className="nav-link active">
            Home
          </Link>
          <Link to="/packages" className="nav-link">
            Packages
          </Link>
          <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
            Discord
          </a>
          {location.pathname == "/cart" ? (
            <></>
          ) : (
            <Lang
              className="nav-link"
              lang={lang}
              onLangChange={onLangChange}
            />
          )}

          <CartCount className="nav-link" cartCount={cartCount} />
        </div>
      </div>
    </>
  );
};

export default Nav;
