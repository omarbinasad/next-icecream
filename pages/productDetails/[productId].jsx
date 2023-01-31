import Image from "next/image";
import React, { useState } from "react";
import { getProductById } from "../../lib/productStore";
import styles from "../../styles/ProductDetails.module.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ProductDetails = ({ details }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(details.price);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...details, price, quantity }));
    console.log({ ...details, price, quantity });
  };
  return (
    <>
      <div className={styles.product_details}>
        <div className="container">
          <div className="row product">
            <div className="col-md-6 product__photo">
              <div className={styles.photo_container}>
                <Image
                  className=""
                  // objectFit="cover"
                  src={details.img}
                  alt="slide-img"
                  layout="fill"
                />
              </div>
            </div>
            <div className="col-md-6 product__info d-flex flex-column justify-content-center align-items-start">
              <div className="title">
                <h1>{details.title}</h1>
                <span>CODE: {details.id}</span>
              </div>
              <div className="price">
                $<span>{price}</span>
              </div>
              <div className="total-price mb-3">
                Total Price ({price} x {quantity}) = $
                <span>{price * quantity}</span>
              </div>
              <div className="variant">
                <p>Select Quantity</p>
                <input
                  style={{ width: "50px", textAlign: "center" }}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  type="number"
                  min="1"
                  value={quantity}
                />
              </div>
              <div className="description">
                <p>Benefits</p>
                <ul>
                  <li>Apples are nutricious</li>
                  <li>Apples may be good for weight loss</li>
                  <li>Apples may be good for bone health</li>
                  <li>They are linked to a lowest risk of diabetes</li>
                </ul>
              </div>
              <button onClick={handleClick} className="buy--btn">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

export const getServerSideProps = async (context) => {
  const productId = context.params.productId;
  const details = await getProductById(productId);
  // if (!details) {
  //   return {
  //     notFound: true,
  //   };
  // }
  return {
    props: {
      details,
    },
  };
};
