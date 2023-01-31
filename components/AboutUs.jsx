import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={`${styles.about_us_main}`}>
        <div className={styles.shap_img}>
          <Image src="/images/Droping_Shape.png" layout="fill" />
        </div>
        <div className={`container ${styles.about_us_container}`}>
          <div className="row">
            <div className="text-white d-flex align-items-center text-center text-md-start col-md-6 pe-lg-5">
              <div>
                <h1 className={styles.about_heading}>About Us</h1>
                <p className={styles.about_desc}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt exercitationem nihil suscipit voluptatem optio?
                  Reprehenderit iure sequi, soluta non itaque tempora maiores,
                  eveniet beatae nam, fugiat dolor aut! Inventore, quo.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex ps-lg-5">
              <div className={`${styles.modal_trigger_container}`}>
                <Image
                  className={styles.right_img}
                  src="/images/icre_cream_cup.jpg"
                  alt="ice-cream-image"
                  layout="fill"
                />
                {/* -- Button trigger modal -- */}
                <div className={styles.right_button}>
                  <button
                    type="button"
                    className={styles.play_btn}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  ></button>
                </div>
                {/* -- Modal -- */}
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div
                    className={`modal-dialog modal-dialog-centered ${styles.video_modal}`}
                  >
                    <div className="modal-content">
                      {/* <button
                        type="button"
                        className="ms-auto btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button> */}
                      <video
                        src="/videos/Icecream_video.mp4"
                        controls
                        autoPlay
                        loop
                      ></video>

                      {/* <div className="modal-body">...</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shap_img}>
          <Image src="/images/Droping_Shape.png" layout="fill" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
