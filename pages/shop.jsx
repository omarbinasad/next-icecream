import React from "react";
import { useSelector } from "react-redux";
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
            <div className={`filter_section`}>
            <FilterSection />
            </div>
          </div>
          <div className={`col-9`}>
            <div className={`sort_filter`}>

            </div>
            <div className={`products_list`}>
            <ProductsList products={products} />
            </div>
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
