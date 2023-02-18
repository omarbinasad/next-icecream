import { useRouter } from "next/router";
import React, { useState } from "react";

const FilterSection = () => {
  // const catId = parseInt(useRouter().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(1000);
  return (
    <div>
      <div className="filterItem">
        <h5>Flavour Categories</h5>
        <div className="inputItem">
          <input type="checkbox" id={1} value={1} />
          <label htmlFor="1">Mango</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id={2} value={2} />
          <label htmlFor="2">Chocolate</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id={3} value={3} />
          <label htmlFor="3">Yogurt</label>
        </div>
        <div className="inputItem">
          <input type="checkbox" id={4} value={4} />
          <label htmlFor="4">Strawberry</label>
        </div>
      </div>
      <div className="filterItem">
        <h5>Filter by price</h5>
        <div className="inputItem">
          <span>0</span>
          <input
            type="range"
            min={0}
            max={100}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <span>100</span>
        </div>
      </div>
      <div className="filterItem">
        <h5>Sort by</h5>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">Price (Lowest)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highestt)</label>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
