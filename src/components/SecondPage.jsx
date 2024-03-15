import React from "react";
import styles from "./SecondPage.module.css";

function SecondPage() {
  return (
    <>
      <div className={styles.secondMain}>
        <div className={styles.secondeContent}>
          <h3>About Us</h3>
          <h1>
            We Make Sparkly <br /> Magic Happen
          </h1>

          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            cupiditate, accusamus id eius eligendi dolor?
          </h5>

          <button>Explore</button>
        </div>
        <div className={styles.secondImg}></div>
        <div className={styles.secondImg1}></div>
      </div>
    </>
  );
}

export default SecondPage;
