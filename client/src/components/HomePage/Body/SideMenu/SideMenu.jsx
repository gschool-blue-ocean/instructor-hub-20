import React, { useContext, useState } from "react";
import CohortContext from "../../../Context/CohortContext";
import { useSignOut } from "react-auth-kit";
import styles from "./SideMenu.module.css";

const SideMenu = ({ logout }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const signOut = useSignOut();

  const handleLogout = () => {
    signOut();
    logout();
    localStorage.removeItem("hasSeenSplash");
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
              id="home"
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("main");
              }}
            >
              Home
            </li>
            <li
              id="students"
              className={styles["students-li"]}
              onClick={() => {
                setBodyDisplay("student");
              }}
            >
              Students
            </li>
            <li
              id="projects"
              className={styles["projects-li"]}
              onClick={() => {
                setBodyDisplay("project");
              }}
            >
              Projects
            </li>
            <li
              id="assessments"
              className={styles["assessments-li"]}
              onClick={() => {
                setBodyDisplay("assessment");
              }}
            >
              Assessments
            </li>
          </ul>
          <span className={styles["sign-out-button-container"]}>
            <button id="sign-out-btn" className={styles["sign-out-btn"]} onClick={handleLogout}>
              Sign Out
            </button>
          </span>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
