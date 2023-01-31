import Image from "next/image";
import React from "react";
import styles from "../styles/cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import CartProductList from "../components/CartProductList";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div className={styles.cart_section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 table-responsive">
            <h5>Total {cart.products.length} products in your cart</h5>
            <table className={`table mt-4 ${styles.cart_table}`}>
              <thead className=" text-white">
                <tr>
                  <th scope="col">Code</th>
                  <th scope="col">Product</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.products.map((product) => (
                  <CartProductList key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          </div>
          <div className="ms-auto col-lg-4 col-md-6 col-12">
            <div className={styles.cart_total_box}>
              <h1 className="">CART TOTAL</h1>
              <p>Subtotal: $10.00</p>
              <p>Discount: $0.00</p>
              <p>Total: $10.00</p>
              <button className="w-100">CHECKOUT NOW!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
