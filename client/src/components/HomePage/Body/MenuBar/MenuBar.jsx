import React, { useContext, useState } from "react";
import styles from "./MenuBar.module.css";
import CohortModal from "./CohortModal/CohortModal";
import CohortContext from "../../../Context/CohortContext";

const MenuBar = () => {
  const { cohort } = useContext(CohortContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["nav-container"]}>
      <CohortModal isOpen={isModalOpen} onClose={handleCloseModal} />
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
            <button
              className={`${styles["change-cohort-btn"]}`}
              onClick={handleOpenModal}
            >
              Change Cohorts
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default MenuBar;
