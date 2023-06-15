import React, { useContext } from "react";
import styles from "./MenuBar.module.css";
import CohortContext from "../../../Context/CohortContext";

const MenuBar = () => {
  const { cohort } = useContext(CohortContext);
  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-bar"]}>
        <div className={styles["instructor-title-cont"]}>
          <h2 className={styles["instructor-title"]}>Hello, Instructor</h2>
          <span className={styles["currently-viewing"]}>
            You're currently viewing <b>{`MCSP-${cohort}`}</b>
          </span>
        </div>
      <div className={styles["wanna-change-cont"]}>
      <span className={styles["wanna-change"]}>
            Want to change cohorts?{" "}
            <button className={styles["change-cohort-btn"]}>
              Change Cohorts
            </button>
          </span>
      </div>
      </nav>
    </div>
  );
};

export default MenuBar;
