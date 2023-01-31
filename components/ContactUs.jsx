import React from "react";
import styles from "../styles/ContactUs.module.css";

const ContactUs = () => {
  return (
    <>
      <div className={styles.contact_us_main}></div>
      <div className="container">
        <section id={styles.contact}>
          <div className={styles.contact_box}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center ${styles.contact_links}`}
            >
              <h2 className={styles.contact_heading}>CONTACT</h2>
              <div className={styles.links}>
                <div className={styles.link}>
                  <a>
                    <img
                      src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
                      alt="linkedin"
                    />
                  </a>
                </div>
                <div className={styles.link}>
                  <a>
                    <img
                      src="https://i.postimg.cc/YCV2QBJg/github.png"
                      alt="github"
                    />
                  </a>
                </div>
                <div className={styles.link}>
                  <a>
                    <img
                      src="https://i.postimg.cc/W4Znvrry/codepen.png"
                      alt="codepen"
                    />
                  </a>
                </div>
                <div className={styles.link}>
                  <a>
                    <img
                      src="https://i.postimg.cc/NjLfyjPB/email.png"
                      alt="email"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.contact_form_wrapper}>
              <form>
                <div className={styles.form_item}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="sender"
                    required
                  />
                  <label className={styles.form_label}>Name:</label>
                </div>
                <div className={styles.form_item}>
                  <input
                    className={styles.form_input}
                    type="text"
                    name="email"
                    required
                  />
                  <label className={styles.form_label}>Email:</label>
                </div>
                <div className={styles.form_item}>
                  <textarea
                    className={styles.form_textarea}
                    name="message"
                    required
                  ></textarea>
                  <label className={styles.form_label}>Message:</label>
                </div>
                <button className={styles.submit_btn}>Send</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
