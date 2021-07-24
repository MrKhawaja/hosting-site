import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import CartCount from "./cartCount";
import Lang from "./lang";

const PackagesSection = ({ onBuyProduct, lang, containerStyle }) => {
  return (
    <>
      <div className="container" style={containerStyle}>
        <h1 className="headline">Our Packages</h1>
        {lang == "en" && (
          <div className="packages">
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Dirt-1"
                ram="1"
                core="1"
                price="4.99"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Dirt-2"
                ram="2"
                core="1"
                price="7.99"
              />
            </div>
            <div className="row">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Iron-1"
                ram="3"
                core="2"
                price="12.99"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Iron-2"
                ram="4"
                core="2"
                price="15.99"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Iron-3"
                ram="5"
                core="2"
                price="19.99"
              />
            </div>
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Gold-1"
                ram="5"
                core="3"
                price="21.99"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Gold-2"
                ram="6"
                core="3"
                price="24.99"
              />
            </div>
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Diamond-1"
                ram="6"
                core="4"
                price="26"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                en
                title="Diamond-2"
                ram="7"
                core="4"
                price="30"
              />
            </div>
          </div>
        )}
        {lang == "bd" && (
          <div className="packages">
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Dirt-1"
                ram="1"
                core="1"
                price="400"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Dirt-2"
                ram="2"
                core="1"
                price="650"
              />
            </div>
            <div className="row">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Iron-1"
                ram="3"
                core="2"
                price="1050"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Iron-2"
                ram="4"
                core="2"
                price="1300"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Iron-3"
                ram="5"
                core="2"
                price="1550"
              />
            </div>
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Gold-1"
                ram="5"
                core="3"
                price="1700"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Gold-2"
                ram="6"
                core="3"
                price="1950"
              />
            </div>
            <div className="row center">
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Diamond-1"
                ram="6"
                core="4"
                price="2100"
              />
              <Card
                onBuy={(a) => onBuyProduct(a)}
                title="Diamond-2"
                ram="7"
                core="4"
                price="2350"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PackagesSection;
