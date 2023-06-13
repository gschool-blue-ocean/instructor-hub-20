import React from "react";
import styles from "./ProjectsTable.module.css";

const ProjectsTable = ({ projects }) => {
  console.log(projects);
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>Group name</th>
              <th className={styles.column2}>Students</th>
              <th className={styles.column3}>Project</th>
              <th className={styles.column4}>Score</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          {projects && projects.length > 0 ? (
            <tbody>
              {projects.map((project, index) => {
                return (
                  <tr key={`Project_${index}`}>
                    <td>{project.group_name}</td>
                    <td>{project.stu_name}</td>
                    <td>{project.project_name}</td>
                    <td className={styles["project-score"]}>
                      {project.grade}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={4} className={styles["no-information"]}>
                  No information to display
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ProjectsTable;
