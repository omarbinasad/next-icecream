import Image from "next/image";
import React from "react";
import styles from "../styles/topFlavour.module.css";
import SingleFlavourCard from "./SingleFlavourCard";

const TopFlavours = ({ products }) => {
  return (
    <>
      <div className={styles.top_flavoure_main}>
        <div className={`container py-5`}>
          <h1 className={`text-center pb-5 ${styles.heading}`}>Top Flavours</h1>
          <div className="row px-5 px-md-0 row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((item) => (
              <SingleFlavourCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFlavours;
