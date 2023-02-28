import React from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";
import { getAllProducts } from "../lib/productStore";
// react-bootstrap tab
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import SortFilter from "../components/SortFilter";

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
            <div className={`products_list`}>
              <Tab.Container id="uncontrolled-tab-example" defaultActiveKey="first">
                <Col>
                <div className={`sort_filter`}>
                  <SortFilter/>
                  </div>
                  
                  <Col >
          <Tab.Content>
            <Tab.Pane eventKey="first">
            <ProductsList products={products} />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <h1>Something</h1>
            </Tab.Pane>
          </Tab.Content>
                  </Col>
                </Col>
              </Tab.Container>
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
