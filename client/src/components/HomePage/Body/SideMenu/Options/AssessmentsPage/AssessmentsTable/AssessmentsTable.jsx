import React, { useContext, useEffect, useState } from "react";
import AssessmentCard from "./AssessmentCard/AssessmentCard";
import styles from "./AssessmentsTable.module.css";
import CohortContext from "../../../../../../Context/CohortContext";

const AssessmentsTable = ({ assessments, updateAssessment, students, assess }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const [sortClicked, setSortClicked] = useState(false);

  const [sortConfig, setSortConfig] = useState({
    key: "",
    direction: "",
  });
  const [sortedAssessments, setSortedAssessments] = useState([...assessments]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setSortClicked(true);
  };

  useEffect(() => {
    const sortedAssessments = [...assessments].sort((a, b) => {
      const key = sortConfig.key;
      const direction = sortConfig.direction === "ascending" ? 1 : -1;

      if (key === "student_name" || key === "assess_name") {
        return a[key].localeCompare(b[key]) * direction;
      } else if (key === "grade" || key === "cohort_number") {
        return (a[key] - b[key]) * direction;
      }

      return 0;
    });

    setSortedAssessments(sortedAssessments);
  }, [assessments, sortConfig]);

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <div className={styles["assessment-table-container"]}>
      <div className={styles["assessment-table-header"]}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>
                Student{" "}
                <img
                  src="/img/arrow-up.png"
                  className={`${styles["name-arrow1"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "student_name"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("student_name")}
                />
              </th>
              <th className={styles.column2}>
                Assessment{" "}
                <img
                  src="/img/arrow-up.png"
                  className={styles["name-arrow2"]}
                  style={{
                    transform:
                      sortConfig.key === "assess_name"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("assess_name")}
                />
              </th>
              <th className={styles.column3}>
                Grade{" "}
                <img
                  src="/img/arrow-up.png"
                  className={styles["name-arrow3"]}
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
              {/* <th className={styles.column4}>
                Cohort{" "}
                <img
                  src="/img/arrow-up.png"
                  className={styles["name-arrow4"]}
                  style={{
                    transform:
                      sortConfig.key === "cohort_number"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("cohort_number")}
                />
              </th> */}
              <th className={styles.column5}>
                    Options{" "}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles["assessment-table-body"]}>
        <table>
          <tbody>
            {sortedAssessments.map((assessment, index) => (
              <React.Fragment key={`Assessment_${index}`}>
                <tr
                  className={selectedRow === index ? styles.selectedRow : ""}
                  onClick={() => handleRowClick(index)}
                >
                  <td>{assessment.student_name}</td>
                  <td className={styles['assess-name']}>{assessment.assess_name}</td>
                  <td>{assessment.grade}</td>
                  {/* <td>{assessment.cohort_number}</td> */}
                  <td><img className={styles['arrow-down']} src="/img/arrow-down.png" alt="" /></td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {selectedRow !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <AssessmentCard
              assessment={sortedAssessments[selectedRow]}
              closeModal={handleCloseModal}
              updateAssessment={updateAssessment}
              selectedRow={selectedRow}
              students={students}
              assess={assess}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssessmentsTable;
