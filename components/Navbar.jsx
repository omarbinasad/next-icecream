import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";
import Logo from "/public/images/logo.png";
import { useSelector } from "react-redux";
import Link from "next/link";
import CartProductList from "./CartProductList";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${styles.navbar_main}`}>
        <div className="container">
          <button
            type="button"
            className={`p-1 btn btn-default  d-lg-none position-relative ${styles.cart_icon}`}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="text-white d-block bi bi-basket2-fill"
              viewBox="0 0 16 16"
            >
              <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
            </svg>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {quantity}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>

          <Link className="navbar-brand" href="/">
            <h1 style={{ cursor: "pointer" }} className=" text-white">
              LOGO
            </h1>
          </Link>
          <button
            className={`navbar-toggler border border-0 ${styles.nav_toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="text-white bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className={`p-2 nav-item ${styles.nav_item}`}>
                <Link
                  className={`${styles.nav_link} active`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className={`p-2 nav-item ${styles.nav_item}`}>
                <Link className={`${styles.nav_link} `} href="/shop">
                  Shop
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className={`p-1 btn btn-default d-none d-lg-block position-relative ${styles.cart_icon}`}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="text-white d-block bi bi-basket2-fill"
                viewBox="0 0 16 16"
              >
                <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z" />
              </svg>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {quantity}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
        <div className={styles.zig_zag}></div>
      </nav>
      {/* offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Your Products</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <table className={`table mt-4 ${styles.cart_table}`}>
            <tbody>
              {cart.products.map((product) => (
                <CartProductList key={product.id} product={product} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="offcanvas-footer p-2 ">
          <h5 className="text-center">Total {cart.products.length} products</h5>
          <Link className="" href="/cart">
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              className="text-white p-2 w-100 bg-danger border-0"
            >
              View Cart Page
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
