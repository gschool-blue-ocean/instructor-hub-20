import React, { useState, useEffect, useContext } from "react";
import styles from "./ProjectsPage.module.css";
import ProjectsTable from "./ProjectsTable/ProjectsTable";
import CohortContext from "../../../../../Context/CohortContext";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { cohort } = useContext(CohortContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `http://localhost:8000/student_project_scores/${cohort}`
      );
      const proj = await response.json();
      setProjects(proj);
    })();
    return () => {};
  }, [cohort]);

  return (
    <div className={styles["student-container"]}>
     <div className={styles["student-title"]}>
        <span className={styles["title"]}>Projects Dashboard</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["student-container-bar"]}>
          <div className={styles["page-header"]}>
            {`MCSP-${cohort} Projects`}
          </div>
          <div className={styles["add-button-container"]}></div>
          <button className={styles["add-btn"]}>Add Project</button>
        </div>
        <div className={styles["table-cont"]}>
          <ProjectsTable projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
