import React from "react";
import Nav from "../components/nav";
import PackagesSection from "../components/packagesSection";

const Packages = ({ onBuyProduct, lang }) => {
  return (
    <>
      <PackagesSection
        onBuyProduct={onBuyProduct}
        lang={lang}
        containerStyle={{ marginTop: "5rem" }}
      />
    </>
  );
};

export default Packages;
