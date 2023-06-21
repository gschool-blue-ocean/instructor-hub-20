import React, { useState } from "react";
import styles from "./ProjectsTable.module.css";

const ProjectsTable = ({ projects }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const sortedProjects = [...projects].sort((a, b) => {
    const key = sortConfig.key;
    const direction = sortConfig.direction === "ascending" ? 1 : -1;

    if (key === "group_name" || key === "project_name") {
      const valueA = a[key] || "";
      const valueB = b[key] || "";
      return valueA.localeCompare(valueB) * direction;
    } else if (key === "grade") {
      return (a[key] - b[key]) * direction;
    }

    return 0;
  });

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>
                Group name{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow"]}
                  onClick={() => handleSort("group_name")}
                />
              </th>
              <th className={styles.column2}>
                Student{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow"]}
                  onClick={() => handleSort("group_name")}
                />
              </th>
              <th className={styles.column3}>
                Project{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow"]}
                  onClick={() => handleSort("project_name")}
                />
              </th>
              <th className={styles.column4}>
                Score{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow"]}
                  onClick={() => handleSort("grade")}
                />
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          {projects && projects.length > 0 ? (
            <tbody>
              {sortedProjects.map((project, index) => {
                return (
                  <tr key={`Project_${index}`}>
                    <td>{project.group_name}</td>
                    <td>{project.stu_name}</td>
                    <td>{project.project_name}</td>
                    <td className={styles["project-score"]}>{project.grade}</td>
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
