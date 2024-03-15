import React, { useState } from "react";
import styles from "./EightPage.module.css";
import imageSrc from "../assets/pngwing.com.png";

function EightPage() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.halfpage}>
        <h1>Subscribe To</h1>
        <h1>our newsletter</h1>
        <div className={styles.insert}>
          <input
            placeholder="Enter here"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <input type="submit" value="Subscribe" />
        </div>
      </div>
      <footer>
        <img className={styles.flw} src={imageSrc} alt="Your alt text here" />
        <div className={styles.footercontent}>
          <h1>
            Precious <br /> Treasures
          </h1>

          <ul>
            <li>Content 1</li>
            <li>Content 2</li>
            <li>Content 3</li>
            <li>Content 4</li>
          </ul>

          <ul>
            <li>Content 5</li>
            <li>Content 6</li>
            <li>Content 7</li>
            <li>Content 8</li>
          </ul>

          <ul>
            <li>Content 9</li>
            <li>Content 10</li>
            <li>Content 11</li>
            <li>Content 12</li>
          </ul>
        </div>

        <hr />

        <p>&copy; 2024 Precious Treasures. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default EightPage;
