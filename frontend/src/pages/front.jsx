import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import CartCount from "../components/cartCount";
import Footer from "../components/footer";
import Lang from "../components/lang";
import PackagesSection from "../components/packagesSection";

function clickNav() {
  const element = document.getElementById("mobile-nav1");
  element.classList.toggle("active");
}

const Front = ({ lang, onLangChange, onBuyProduct, cartCount }) => {
  return (
    <>
      <header>
        <nav>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginBottom: "1rem",
              fontSize: ".8rem",
            }}
          >
            <a href="https://panel.alveehawak.xyz" className="nav-link">
              Panel
            </a>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </div>
          <img src="logo.svg" className="logo" alt="" srcset="" />
          <span className="material-icons nav-icon" onClick={clickNav}>
            reorder
          </span>
          <div className="nav-links">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <a href="#packages" className="nav-link">
              Packages
            </a>
            <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
              Discord
            </a>
            <Lang
              className="nav-link"
              lang={lang}
              onLangChange={onLangChange}
            />
            <CartCount className="nav-link" cartCount={cartCount} />
          </div>
        </nav>

        <div className="header-box">
          <div id="mobile-nav1" className="nav-links mobile">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <a href="#packages" className="nav-link">
              Packages
            </a>
            <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
              Discord
            </a>
            <Lang
              className="nav-link"
              lang={lang}
              onLangChange={onLangChange}
            />
            <CartCount className="nav-link" cartCount={cartCount} />
          </div>
          <div className="logo-box-container">
            <div className="logo-box">
              <h1 className="logo lower">Pixeledge</h1>
              <h1 className="logo">Hosting</h1>
              <p className="tagline">
                Buy the most affordable minecraft server hosting and development
                from the best in Bangladesh. Our service starts at 400 taka
                monthly.
              </p>
              <a
                href="#packages"
                style={{ marginRight: "2rem" }}
                className="btn btn-wide btn-secondary"
              >
                Buy Now
              </a>
            </div>
          </div>
          <img src="server.png" className="hero" alt="" srcset="" />
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="quote">DDOS Protected Network</div>
          {lang == "en" && (
            <div className="quote">
              Paypal <br /> Payment Method
            </div>
          )}
          {lang == "bd" && (
            <div className="quote">
              Bkash, Nogod, Rocket <br /> Payment Method
            </div>
          )}

          <div className="quote">4 Years Of Experience</div>
        </div>
        <a name="packages"></a>
        <PackagesSection onBuyProduct={onBuyProduct} lang={lang} />
      </div>
    </>
  );
};

export default Front;
