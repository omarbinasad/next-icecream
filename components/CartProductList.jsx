import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/cart.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { removeProduct } from "../redux/cartSlice";

const CartProductList = ({ product }) => {
  // router for single product view
  const router = useRouter();
  const productView = useCallback(
    (productId) => {
      router.push(`productDetails/${productId}`);
    },
    [router]
  );

  const dispatch = useDispatch();

  // const handleClickRemove = () => {
  //   dispatch(removeProduct(product.id));
  // };
  return (
    <>
      <tr className={styles.cart_product_list} key={product.id}>
        {/* <td scope="row">{product.id}</td> */}
        <td>
          <div className={styles.image_container}>
            <Image
              src={product.img}
              alt="product-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </td>
        <td>
          <Link href={`/productDetails/${product.id}`}>
            <b>{product.title}</b>
          </Link>
        </td>
        <td>{product.price}</td>
        <td>
          <input
            style={{ width: "50px", textAlign: "center" }}
            type="number"
            min={1}
            value={product.quantity}
          />
        </td>
        <td>{product.price * product.quantity}</td>
        <td>
          <button
            className={`p-0 border-0 bg-light ${styles.remove_btn} `}
            onClick={() => dispatch(removeProduct(product.id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartProductList;
