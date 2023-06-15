import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <footer>
        <p id="footer-text">
          Proprietary Content, © 2013 - 2023 Galvanize, Inc.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
