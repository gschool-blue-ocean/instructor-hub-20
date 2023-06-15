import React from "react";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles["student-container"]}>
      <div className={styles["student-title"]}>
        <span className={styles["title"]}>Home Dashboard</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["student-container-bar"]}>
          <div className={styles["page-header"]}>{` Projects`}</div>
          <div className={styles["add-button-container"]}></div>
          <button className={styles["add-btn"]}>Add Project</button>
        </div>
        <div className={styles["table-cont"]}></div>
      </div>
    </div>
  );
};

export default MainPage;
