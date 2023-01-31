import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import { data } from "../imgData";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <div className={styles.paging_img_div}>
          <Image src={data[i].img} alt="slider-paging-img" layout="fill" />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-custom-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  return (
    <>
      <div className={`${styles.hero_section}`}>
        <div className="container">
          <Slider className="iceCream_hero_Slider" {...settings}>
            {data.slice(0, 3).map((item) => (
              <div key="key1" className={styles.slide_div}>
                <div className={styles.hero_bg_img}>
                  <Image src={item.bg_img} alt="slide-bg-img" />
                </div>
                <div className={styles.hero_bg_img}>
                  <Image src={item.bg_img} alt="slide-bg-img" />
                </div>
                <div className={styles.hero_bg_img}>
                  <Image src={item.bg_img} alt="slide-bg-img" />
                </div>
                <div className={styles.hero_bg_img}>
                  <Image src={item.bg_img} alt="slide-bg-img" />
                </div>
                <div className={styles.hero_bg_img}>
                  <Image src={item.bg_img} alt="slide-bg-img" />
                </div>
                <div className={`row ${styles.hero_row}`}>
                  <div
                    className={`col-md-7 d-flex flex-column align-items-center
                    align-items-md-start justify-content-center text-center text-md-start ${styles.left_content}`}
                  >
                    <h3 className={`hero_text ${item.color}`}>{item.text}</h3>
                    <button className="hero-button">Explore Now</button>
                  </div>
                  <div className="col-md-5">
                    <div className="slide-img-main position-relative w-100 h-100 d-flex align-items-center ">
                      <Image
                        // layout="fill"
                        className=""
                        src={item.img}
                        alt="slide-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
