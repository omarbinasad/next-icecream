import React from "react";
import Banner from "../components/Banner";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";
import { getAllProducts } from "../lib/productStore";

const Shop = ({ products }) => {
  return (
    <>
      <Banner />
      <div className={`container`}>
        <div className="row">
          <div className={`col-3`}>
            <FilterSection />
          </div>
          <div className={`col-9`}>
            <ProductsList products={products} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;

export const getServerSideProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};
