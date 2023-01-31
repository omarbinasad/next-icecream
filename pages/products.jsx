import React from "react";
import Banner from "../components/Banner";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";

const products = () => {
  return (
    <>
      <Banner />
      <div className={`container`}>
        <div className="row">
          <div className={`col-3`}>
            <FilterSection />
          </div>
          <div className={`col-9`}>
            <ProductsList />
          </div>
        </div>
      </div>
    </>
  );
};

export default products;
