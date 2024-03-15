import React from "react";
import styles from "./SixthPage.module.css";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
function SixthPage() {
  return (
    <div className={styles.main}>
      <IoArrowBackCircleOutline className={styles.barrow} />
      <IoArrowForwardCircleOutline className={styles.farrow} />
      <div className={styles.heading}>
        <h3>Highlights</h3>
        <h1>
          Bride & Groom <br /> Collection
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.imgdiv1}></div>
          <h1>Ring</h1>
          <h3>$500</h3>
          <button>Add to Cart</button>
        </div>
        <div className={styles.cart}>
          <div className={styles.imgdiv2}></div>
          <h1>Ring</h1>
          <h3>$500</h3>
          <button>Add to Cart</button>
        </div>
        <div className={styles.cart}>
          <div className={styles.imgdiv3}></div>
          <h1>Ring</h1>
          <h3>$500</h3>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default SixthPage;
