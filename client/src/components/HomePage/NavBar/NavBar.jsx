import React, { useContext } from "react";
import styles from "./NavBar.module.css";
import { useSignOut } from "react-auth-kit";
import CohortContext from "../../Context/CohortContext";

const NavBar = ({ logout }) => {
  const signOut = useSignOut();
  const { setBodyDisplay } = useContext(CohortContext);

  const handleLogout = () => {
    signOut();
    logout();
  };

  const handleLogoClick = () => {
    setBodyDisplay("main");
  };

  return (
    <div className={styles["nav-container"]}>
      <nav className={styles["nav-bar"]}>
        <span className={styles["logo-and-title"]} onClick={handleLogoClick}>
          <img
            className={styles["galv-logo"]}
            src="https://coursereport-production.imgix.net/uploads/school/logo/10/original/galvanize_logomark_full-color_light-background.png"
            alt=""
          />
          <h3 className={styles["nav-title"]}>Instructor Hub</h3>
        </span>
        <span className={styles["sign-out-button-container"]}>
          <button className={styles["sign-out-btn"]} onClick={handleLogout}>
            Sign Out
          </button>
        </span>
      </nav>
    </div>
  );
};

export default NavBar;
