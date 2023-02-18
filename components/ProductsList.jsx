import React from "react";
import SingleFlavourCard from "./SingleFlavourCard";

const ProductsList = ({ products }) => {
  return (
    <div>
      <h1>Products</h1>
      <div className="row px-5 px-md-0 row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {products.map((item) => (
          <SingleFlavourCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
