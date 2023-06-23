import React, { useContext, useState, useEffect } from "react";
import styles from "./CohortModal.module.css";
import CohortContext from "../../../../Context/CohortContext";

const CohortModal = ({ isOpen, onClose }) => {
  const { cohort, setCohort, setBodyDisplay } = useContext(CohortContext);
  const [currentCohorts, setCurrentCohorts] = useState([]);

  useEffect(() => {
    fetch("/api/cohorts")
      .then((response) => response.json())
      .then((data) => setCurrentCohorts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleItemClick = (item) => {
    setCohort(item.cohort_number);
  };

  return (
    <div
      className={`${styles["overlay"]} ${isOpen ? styles["open"] : ""}`}
      onClick={onClose}
    >
      <div
        className={`${styles["modal-cont"]} ${isOpen ? styles["active"] : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles["current-view-cont"]}>
          <span>
            You are currently viewing<b>{`MCSP-${cohort}`}</b>
          </span>
        </div>
        <div className={styles["dropdown-cont"]}>
          <h5>Change to a different cohort</h5>
          <ul>
            {currentCohorts.map((item) => (
              <li
                key={item.cohort_number}
                onClick={() => handleItemClick(item)}
              >
                {`MCSP - ${item.cohort_number}`}
              </li>
            ))}
          </ul>
          <div className={styles["exit-btn-cont"]}>
            <button onClick={onClose} className={styles["exit-btn"]}>
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CohortModal;
