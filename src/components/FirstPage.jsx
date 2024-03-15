import React from "react";
import styles from "./FirstPage.module.css";
import imageSrc from "../assets/pngwing.com.png"; // Import the image

function FirstPage() {
  return (
    <div className={styles.mainpage}>
      {/* Use the imported image source */}
      <img className={styles.flw} src={imageSrc} alt="Your alt text here" />
      <div className={styles.heading}>
        <h1>
          Unique Jewelry, <br /> Rare Gems, And <br /> Exquisite pieces!
        </h1>
      </div>
      <div className={styles.imgdiv}>
    <div className={styles.overlay}></div>
      </div>
    </div>
  );
}

export default FirstPage;
