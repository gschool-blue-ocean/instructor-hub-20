import React from "react";
import styles from "./ProjectsTable.module.css";

const ProjectsTable = ({ projects }) => {
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
                const projectMembers = [
                  project.student1,
                  project.student2,
                  project.student3,
                  project.student4,
                  project.student5,
                  project.student6,
                ];
                const memberRows = [];
                for (let i = 0; i < projectMembers.length; i += 3) {
                  const rowMembers = projectMembers.slice(i, i + 3);
                  memberRows.push(rowMembers);
                }
                return (
                  <tr key={`Project_${index}`}>
                    <td>{project.group_name}</td>
                    <td className={styles["project-members"]}>
                      {memberRows.map((rowMembers, rowIndex) => (
                        <div
                          className={styles["project-member-row"]}
                          key={`MemberRow_${rowIndex}`}
                        >
                          {rowMembers.map((member, memberIndex) => (
                            <React.Fragment key={`Member_${memberIndex}`}>
                              <div className={styles["project-member"]}>
                                {member}
                              </div>
                              {memberIndex !== rowMembers.length - 1 && (
                                <div className={styles["project-member-dot"]}>
                                  &middot;
                                </div>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      ))}
                    </td>
                    <td>{project.project_name}</td>
                    <td className={styles["project-score"]}>
                      {project.project_score}
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
