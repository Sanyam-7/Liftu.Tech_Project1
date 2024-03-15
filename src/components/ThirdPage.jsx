import React from "react";
import styles from "./ThirdPage.module.css";
import imageSrc from "../assets/pngwing.com.png";
import image from "../assets/—Pngtree—gold powder splash ink sky_5748312.png";
import ring1 from "../assets/pngwing.com (1).png";
import ring2 from "../assets/pngwing.com (2).png";
import ring3 from "../assets/pngwing.com (3).png";
import ring4 from "../assets/pngwing.com (4).png";

function ThirdPage() {
  const rings = [
    { image: ring1, name: "Gold Ring", price: "$550" },
    { image: ring2, name: "Diamond Ring", price: "$550" },
    { image: ring3, name: " Platanium Ring", price: "$550" },
    { image: ring4, name: " Rose Gold Ring", price: "$550" },
  ];
  return (
    <div className={styles.main}>
      <img className={styles.flw} src={imageSrc} alt="Your alt text here" />
      <img className={styles.flw1} src={image} alt="Your alt text here" />
      <div className={styles.heading}>
        <h1>Weekly Best Seller</h1>
      </div>
      <div className={styles.contentdiv}>
        {rings.map((ring, index) => (
          <div key={index} className={styles.cart}>
            <img src={ring.image} alt={ring.name} />
            <h1>{ring.name}</h1>
            <h2>{ring.price}</h2>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdPage;
