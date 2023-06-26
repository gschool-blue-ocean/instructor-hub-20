import React, { useContext, useState, useEffect } from "react";
import styles from "./SplashScreen.module.css";
import HomePage from "../HomePage/HomePage";
import CohortContext from "../Context/CohortContext";

const SplashScreen = ({ logout }) => {
  const { cohort, setCohort, setBodyDisplay } = useContext(CohortContext);
  const [currentCohorts, setCurrentCohorts] = useState([]);
  const [showSplash, setShowSplash] = useState(true);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    fetch("/api/cohorts")
      .then((response) => response.json())
      .then((data) => setCurrentCohorts(data))
      .catch((error) => console.log(error));

    const hasSeenSplash = localStorage.getItem("hasSeenSplash");
    setShowSplash(!hasSeenSplash);

    const timeout = setTimeout(() => {
      setShowSplash(false);
      localStorage.setItem("hasSeenSplash", true);
    }, 3000);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const handleItemClick = (item) => {
    setCohort(item.cohort_number);
    setBodyDisplay("main");
    setShowSplash(false);
    localStorage.setItem("hasSeenSplash", true);
  };

  const handleExitClick = () => {
    setShowSplash(false);
    localStorage.setItem("hasSeenSplash", true);
  };

  return (
    <>
      {showSplash && (
        <div className={`${styles.overlay} ${styles.open}`}>
          <div
            className={`${styles["modal-cont"]} ${styles.active}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles["current-view-cont"]}>
              <span>
                You are currently viewing <b>{`MCSP-${cohort}`}</b>
              </span>
            </div>
            <div className={styles["dropdown-cont"]}>
              <h5>Change to a different cohort</h5>
              <ul>
                {currentCohorts.map((item) => (
                  <li
                    id={'splash'+item.cohort_number}
                    key={item.cohort_number}
                    onClick={() => handleItemClick(item)}
                  >
                    {`MCSP - ${item.cohort_number}`}
                  </li>
                ))}
              </ul>
              <div className={styles["warning-cont"]}>
                <span>
                  You will be redirected to the Home Page in {countdown} seconds
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
      {!showSplash && <HomePage logout={logout} />}
    </>
  );
};

export default SplashScreen;
