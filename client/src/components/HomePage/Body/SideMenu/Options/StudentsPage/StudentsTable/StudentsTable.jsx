import React, { useState, useEffect } from "react";
import styles from "./StudentsTable.module.css";
import StudentCard from "./StudentCard/StudentCard";

const StudentsTable = ({ studs, updateStudent }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [sortedStudents, setSortedStudents] = useState([...studs]);
  const [sortClicked, setSortClicked] = useState(false);

  const handleRowClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setSortClicked(true);
  };

  useEffect(() => {
    const sortedData = [...studs].sort((a, b) => {
      const key = sortConfig.key;
      const direction = sortConfig.direction === "ascending" ? 1 : -1;

      if (
        key === "stu_name" ||
        key === "email" ||
        key === "github" 
      ) {
        return a[key].localeCompare(b[key]) * direction;
      } else if (key === "cohort_number") {
        return (a[key] - b[key]) * direction;
      }

      return 0;
    });

    setSortedStudents(sortedData);
  }, [studs, sortConfig]);

  return (
    <div className={styles["student-table-container"]}>
      <div className={styles["student-table-header"]}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>
                Student{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["name-arrow1"]} ${
                    sortClicked && styles.clicked
                  }`}
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
              <th className={styles.column2}>
                Email{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["name-arrow2"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "email"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("email")}
                />
              </th>
              <th className={styles.column3}>
                GitHub{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["name-arrow3"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "github"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("github")}
                />
              </th>
              {/* <th className={styles.column4}>
                Grad Date{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["name-arrow4"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "graduation"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("graduation")}
                />
              </th> */}
              {/* <th className={styles.column5}>
                Cohort{" "}
                <img
                  src="../../../../../../../img/arrow-up.png"
                  className={`${styles["name-arrow5"]} ${
                    sortClicked && styles.clicked
                  }`}
                  style={{
                    transform:
                      sortConfig.key === "cohort"
                        ? `scale(0.6) translateY(8px) rotate(${
                            sortConfig.direction === "descending"
                              ? "180deg"
                              : "0deg"
                          })`
                        : "scale(0.6) translateY(8px)",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("cohort")}
                />
              </th> */}
              <th className={styles.column6}>Options{" "}</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles["student-table-body"]}>
        <table>
          <tbody>
            {sortedStudents.map((stud, index) => (
              <React.Fragment key={`Student_${index}`}>
                <tr
                  className={selectedRow === index ? styles.selectedRow : ""}
                  onClick={() => handleRowClick(index)}
                >
                  <td>{stud.stu_name}</td>
                  <td>{stud.email}</td>
                  <td>{stud.github}</td>
                  {/* <td>{stud.graduation}</td> */}
                  {/* <td>{stud.cohort_number}</td> */}
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
        </table>
      </div>
      {selectedRow !== null && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <StudentCard
              student={sortedStudents[selectedRow]}
              closeModal={handleCloseModal}
              updateStudent={updateStudent}
              selectedRow={selectedRow}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsTable;
