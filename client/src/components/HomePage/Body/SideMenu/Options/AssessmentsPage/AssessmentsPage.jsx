import React, { useState, useEffect, useContext } from "react";
import styles from './AssessmentsPage.module.css';
import AssessmentsTable from "./AssessmentsTable/AssessmentsTable";
import CohortContext, {CohortProvider} from "../../../../../Context/CohortContext";

const AssessmentsPage = () => {
  
  const [assessments, setAssessments] = useState([]);
  const { cohort } = useContext(CohortContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/assessment_scores`
      );
      const assess = await response.json();
      setAssessments(assess);
    })();
    return () => {};
  }, [cohort]);

  return (
    <CohortProvider>
    <div className={styles["student-container"]}>
    <div className={styles["student-title"]}>Assessment Dashboard</div>
    <div className={styles["table-container"]}>
      <div className={styles["student-container-bar"]}>
        <div className={styles["page-header"]}>
          {`MCSP Assessments`}
        </div>
        <div className={styles["add-button-container"]}></div>
        <button className={styles["add-btn"]}>Add Assessment</button>
      </div>
      <div className={styles['table-cont']}>
        <AssessmentsTable assessments={assessments} />
      </div>
    </div>
  </div>
  </CohortProvider>
  )
}

export default AssessmentsPage;