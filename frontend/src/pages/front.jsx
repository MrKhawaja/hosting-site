import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";

function clickNav() {
  const element = document.getElementById("mobile-nav");
  element.classList.toggle("active");
}
const Front = ({ lang }) => {
  return (
    <>
      <header>
        <nav>
          <img src="logo.svg" className="logo" alt="" srcset="" />
          <span className="material-icons nav-icon" onClick={clickNav}>
            reorder
          </span>
          <div className="nav-links">
            <a
              href="https://hosting.alveehawak.xyz"
              className="nav-link active"
            >
              Home
            </a>
            <a href="#packages" className="nav-link">
              Packages
            </a>
            <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
              Discord
            </a>
          </div>
        </nav>

        <div className="header-box">
          <div id="mobile-nav" className="nav-links mobile">
            <a
              href="https://hosting.alveehawak.xyz"
              className="nav-link active"
            >
              Home
            </a>
            <a href="#packages" className="nav-link">
              Packages
            </a>
            <a href="https://discord.gg/9WAWV6qaAE" className="nav-link">
              Discord
            </a>
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
              <a href="#packages" className="btn btn-wide btn-secondary">
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
        <h1 className="headline">Our Packages</h1>
        {lang == "en" && (
          <div className="packages">
            <div className="row center">
              <Card en title="Dirt-2" ram="1" core="1" price="4.99" />
              <Card en title="Dirt-2" ram="2" core="1" price="7.99" />
            </div>
            <div className="row">
              <Card en title="Iron-1" ram="3" core="2" price="12.99" />
              <Card en title="Iron-2" ram="4" core="2" price="15.99" />
              <Card en title="Iron-3" ram="5" core="2" price="19.99" />
            </div>
            <div className="row center">
              <Card en title="Gold-1" ram="5" core="3" price="21.99" />
              <Card en title="Gold-2" ram="6" core="3" price="24.99" />
            </div>
            <div className="row center">
              <Card en title="Diamond-1" ram="6" core="4" price="26" />
              <Card en title="Diamond-2" ram="7" core="4" price="30" />
            </div>
          </div>
        )}
        {lang == "bd" && (
          <div className="packages">
            <div className="row center">
              <Card title="Dirt-2" ram="1" core="1" price="400" />
              <Card title="Dirt-2" ram="2" core="1" price="650" />
            </div>
            <div className="row">
              <Card title="Iron-1" ram="3" core="2" price="1050" />
              <Card title="Iron-2" ram="4" core="2" price="1300" />
              <Card title="Iron-3" ram="5" core="2" price="1550" />
            </div>
            <div className="row center">
              <Card title="Gold-1" ram="5" core="3" price="1700" />
              <Card title="Gold-2" ram="6" core="3" price="1950" />
            </div>
            <div className="row center">
              <Card title="Diamond-1" ram="6" core="4" price="2100" />
              <Card title="Diamond-2" ram="7" core="4" price="2350" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Front;
