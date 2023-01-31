import Image from "next/image";
import React from "react";
import styles from "../../styles/Orders.module.css";

const Order = () => {
  return (
    <div className={styles.cart_section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 table-responsive">
            <table className="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col"> Customer Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>John Doe</td>
                  <td>Road no, City</td>
                  <td>$10.00</td>
                </tr>
              </tbody>
            </table>
            <div className={styles.progress_stepper}>
              <ul className={styles.steps}>
                <li
                  className={`col-md-3 ${styles.step} ${styles.step_incomplete} ${styles.step_active}`}
                >
                  <span className={styles.step__icon}></span>
                  <span className={styles.step__label}>Payment</span>
                </li>
                <li
                  className={`col-md-3 ${styles.step} ${styles.step_incomplete} ${styles.step_inactive}`}
                >
                  <span className={styles.step__icon}></span>
                  <span className={styles.step__label}>Preparing</span>
                </li>
                <li
                  className={`col-md-3 ${styles.step} ${styles.step_incomplete} ${styles.step_inactive}`}
                >
                  <span className={styles.step__icon}></span>
                  <span className={styles.step__label}>On the way</span>
                </li>
                <li
                  className={`col-md-3 ${styles.step} ${styles.step_incomplete} ${styles.step_inactive}`}
                >
                  <span className={styles.step__icon}></span>
                  <span className={styles.step__label}>Delivered</span>
                </li>
              </ul>
            </div>
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

export default Order;
