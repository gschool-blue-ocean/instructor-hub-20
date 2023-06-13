import React, { useState, useContext } from "react";
import CohortContext from "../../../Context/CohortContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./SideMenu.module.css";

const SideMenu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setBodyDisplay } = useContext(CohortContext);

  const handleArrowClick = () => {
    setIsVisible(!isVisible);
  };

  const handleOptionsClick = () => {
    setIsVisible(true); 
  };

  const handleSelectionClick = () => {
    setIsVisible(false);
  }

  return (
    <>
      {isVisible && (
        <div className={styles.overlay} onClick={handleArrowClick} />
      )}
      <div
        className={`${styles["sidemenu-container"]} ${
          isVisible ? styles["visible"] : ""
        }`}
      >
        <div className={styles["arrow-container"]}>
          <span
            id={styles["arrow"]}
            className={styles["arrow-icon"]}
            onClick={handleArrowClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </div>
        <div className={styles["menu-container"]}>
          <h3 className={styles["menu-title"]}>Menu</h3>
          <ul className={styles["select-container"]}>
            <li
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("main");
                handleSelectionClick(); 
              }}
            >
              Home
            </li>
            <li
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("student");
                handleSelectionClick(); 
              }}
            >
              Students
            </li>
            <li
              className={styles["projects-li"]}
              onClick={() => {
                setBodyDisplay("project");
                handleSelectionClick();
              }}
            >
              Projects
            </li>
            <li
              className={styles["assessments-li"]}
              onClick={() => {
                setBodyDisplay("assessment");
                handleSelectionClick();
              }}
            >
              Assessments
            </li>
            <li className={styles["cohorts-li"]}>Cohorts</li>
          </ul>
        </div>
      </div>
      <div className={styles["options-btn-cont"]}>
        <div className={styles["options-btn"]} onClick={handleOptionsClick}>
          Menu
        </div>
      </div>
    </>
  );
};

export default SideMenu;
