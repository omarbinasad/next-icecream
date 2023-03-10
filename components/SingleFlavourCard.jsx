import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartSlice";
import styles from "../styles/SingleFlavourCard.module.css";

const SingleFlavourCard = ({ item }) => {
  // const [quantity, setQuantity] = useState(1);

  // router for single product view
  const router = useRouter();
  const productView = useCallback(
    (productId) => {
      router.push(`productDetails/${productId}`);
    },
    [router]
  );

  const dispatch = useDispatch();

  const quantity = 1;
  // handler function for add to cart
  const handleClick = () => {
    dispatch(addProduct({ ...item, quantity }));
    console.log({ ...item, quantity });
  };
  // const handleClick = () => {
  //   dispatch(addProduct({ ...details, price, quantity }));
  //   console.log({ ...details, price, quantity });
  // };
  return (
    <div className="col px-xl-4">
      <div className="card h-100 text-center overflow-hidden">
        <div className={styles.product_img}>
          <Image
            src={item.img}
            className="card-img-top"
            alt="card-img"
            width="100%"
            height="100%"
          />
        </div>
        <div
          className={`card-footer d-flex justify-content-between ${styles.card_bottom}`}
        >
          <h5 className={styles.product_name}>{item.title}</h5>
          <span onClick={handleClick} className={styles.add_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </span>
          <p className={styles.product_price}>${item.price}</p>
        </div>
        <Link href={`/productDetails/${item.id}`}>
          <button
            // onClick={() => productView(item.id)}
            className={styles.view_button}
          >
            View
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFlavourCard;
