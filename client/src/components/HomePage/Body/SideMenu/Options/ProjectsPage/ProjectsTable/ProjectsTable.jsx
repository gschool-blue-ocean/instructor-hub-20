import React, { useContext, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styles from "./ProjectsTable.module.css";
import CohortContext from "../../../../../../Context/CohortContext";

const ProjectsTable = ({ projects, students, currentProj, updateProject }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const [sortClicked, setSortClicked] = useState(false);

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });
  const [sortedProjects, setSortedProjects] = useState([...projects]);
  const [selectedRow, setSelectedRow] = useState(null);

const handleSort = (key) => {
  let direction = "ascending";
  if (sortConfig.key === key && sortConfig.direction === "ascending") {
    direction = "descending";
  }
  setSortConfig({ key: key || "", direction });
  setSortClicked(true);
};

useEffect(() => {
  const sortedProjects = [...projects].sort((a, b) => {
    const key = sortConfig.key;
    const direction = sortConfig.direction === "ascending" ? 1 : -1;

    if (key === "group_name" || key === "project_name" || key === "stu_name") {
      return (a[key] || "").localeCompare(b[key] || "") * direction;
    } else if (key === "grade") {
      return (a[key] - b[key]) * direction;
    }

    return 0;
  });

  setSortedProjects(sortedProjects);
}, [projects, sortConfig]);


  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };


  return (
    <div className={styles["projects-table-container"]}>
      <div className={styles["projects-table-header"]}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>
                Group name{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["group-name-arrow1"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "group_name"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("group_name")}
                />
              </th>
              <th className={styles.column2}>
                Student{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow2"]}
                  style={{
                    transform:
                      sortConfig.key === "stu_name"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("stu_name")}
                />
              </th>
              <th className={styles.column3}>
                Project{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow3"]}
                  style={{
                    transform:
                      sortConfig.key === "project_name"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("project_name")}
                />
              </th>
              <th className={styles.column4}>
                Score{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={styles["group-name-arrow4"]}
                  style={{
                    transform:
                      sortConfig.key === "grade"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("grade")}
                />
              </th>
              <th className={styles.column5}>Options </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles["projects-table-body"]}>
        <table>
          {sortedProjects && sortedProjects.length > 0 ? (
            <tbody>
              {sortedProjects.map((project, index) => (
                <React.Fragment key={`Project_${index}`}>
                  <tr
                    className={
                      selectedRow === index ? styles.selectedRow : undefined
                    }
                    onClick={() => handleRowClick(index)}
                  >
                    <td>{project.group_name}</td>
                    <td>{project.stu_name}</td>
                    <td>{project.project_name}</td>
                    <td className={styles["project-score"]}>{project.grade}</td>
                    <td>
                      <img
                        className={styles["arrow-down"]}
                        src="../../../../../../../img/arrow-down.png"
                        alt=""
                      />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
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
       {selectedRow !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <ProjectCard
              project={sortedProjects[selectedRow]}
              onClose={handleCloseModal}
              students={students}
              currentProj={currentProj}
              updateProject={updateProject}
              selectedRow={selectedRow}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsTable;
