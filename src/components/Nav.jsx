import React from "react";
import styles from "./Nav.module.css";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Nav() {
  return (
    <div className={styles.mainnav}>
      <div className={styles.logo}>
        <h1>PRECIOUS TREASURES</h1>
      </div>
      <div className={styles.nav_content}>
        {["Home", "About", "Shop", "Contact"].map((item, index) => (
          <a key={index} className="achor" href="">
            {item}
          </a>
        ))}
        <CiSearch />
        <CiShoppingCart />
      </div>
    </div>
  );
}

export default Nav;
