import React from "react";
import styles from "./FifthPage.module.css";
import image from "../assets/—Pngtree—gold powder splash ink sky_5748312.png";

function FifthPage() {
  return (
    <div className={styles.main}>
      <img className={styles.flw1} src={image} alt="Your alt text here" />
      <img className={styles.flw2} src={image} alt="Your alt text here" />
      <div className={styles.container}>
        <div className={styles.overlay}></div>
      </div>
    </div>
  );
}

export default FifthPage;
