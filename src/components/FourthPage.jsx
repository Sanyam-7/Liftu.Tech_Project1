import React from "react";
import styles from "./FourthPage.module.css";
import imageSrc from "../assets/pngwing.com.png";
import image from "../assets/—Pngtree—gold powder splash ink sky_5748312.png";

function FourthPage() {
  return (
    <div className={styles.Main}>
      <img className={styles.flw} src={imageSrc} alt="Your alt text here" />
      <img className={styles.flw1} src={image} alt="Your alt text here" />
      <div className={styles.Img}></div>
      <div className={styles.Img1}></div>
      <div className={styles.Content}>
        <h3>One & Only</h3>
        <h1>
          True <br /> Unique Style
        </h1>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          cupiditate, accusamus id eius eligendi dolor?
        </h5>
        <button>Explore</button>
      </div>
    </div>
  );
}

export default FourthPage;
