import React, { useState, useContext } from "react";
import CohortContext from "../../../Context/CohortContext";
import { useSignOut } from "react-auth-kit";
import styles from "./SideMenu.module.css";

const SideMenu = ({ logout }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();
    logout();
  };

  return (
    <>
      <div className={styles["sidemenu-container"]}>
        <div className={styles["menu-container"]}>
          <span className={styles["logo-and-title"]}>
            <img
              className={styles["galv-logo"]}
              src="https://coursereport-production.imgix.net/uploads/school/logo/10/original/galvanize_logomark_full-color_light-background.png"
              alt=""
            />
            <h3 className={styles["nav-title"]}>Instructor Hub</h3>
          </span>
          <ul className={styles["select-container"]}>
            <li
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("main");
              }}
            >
              Home
            </li>
            <li
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("student");
              }}
            >
              Students
            </li>
            <li
              className={styles["projects-li"]}
              onClick={() => {
                setBodyDisplay("project");
              }}
            >
              Projects
            </li>
            <li
              className={styles["assessments-li"]}
              onClick={() => {
                setBodyDisplay("assessment");
              }}
            >
              Assessments
            </li>
            <li className={styles["cohorts-li"]}>Cohorts</li>
          </ul>
          <span className={styles["sign-out-button-container"]}>
          <button className={styles["sign-out-btn"]} onClick={handleLogout}>
            Sign Out
          </button>
        </span>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
