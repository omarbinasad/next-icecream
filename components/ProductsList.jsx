import React from "react";
import { useSelector } from "react-redux";
import SingleFlavourCard from "./SingleFlavourCard";

const ProductsList = ({ products }) => {
  const filter = useSelector((state)=> state.filter);
  const {filtered_products} = filter;
  let content;
  if(products.length){
    content = products.map((item) => (
      <SingleFlavourCard key={item.id} item={item} />
    ));
  }
  if(products.length && (filter.filtered_products.length)){
   content = products.filter(product => {
    if (filter.filtered_products.length) {
      return filter.filtered_products.includes(product.flavour);
    }
    return product ;
    }).map((item) => (
      <SingleFlavourCard key={item.id} item={item} />
    ))
  }
  return (
    <div>
      
      <div className="row px-5 px-md-0 row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {content}
      </div>
    </div>
  );
};

export default ProductsList;
