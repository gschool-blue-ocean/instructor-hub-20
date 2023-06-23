import React, { useState, useEffect, useContext } from "react";
import styles from "./StudentsPage.module.css";
import StudentsTable from "./StudentsTable/StudentsTable";
import CohortContext from "../../../../../Context/CohortContext";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const { cohort } = useContext(CohortContext);
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    stu_name: "",
    email: "",
    github: "",
    cohort_number: cohort,
  });

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(`/api/students/${cohort}`);
      const studentsData = await response.json();
      setStudents(studentsData);
    };

    fetchStudents();

    return () => {};
  }, [cohort, students]);

  const handleAddStudent = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { stu_name, email, github } = newStudent;

    const response = await fetch("/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stu_name,
        email,
        github,
        cohort_number: cohort,
      }),
    });

    if (response.ok) {
      try {
        const responseData = await response.json();
        setShowModal(false);
        setNewStudent({
          stu_name: "",
          email: "",
          github: "",
          cohort_number: cohort,
        });
        window.alert("Student Successfully Added");
      } catch (error) {
        console.error("Failed to parse JSON response:", error);
      }
    } else {
      console.error("Failed to add student. Response status:", response.status);
      console.error("Response text:", await response.text());
    }
  };

  const handleStudentAssessment = (index, updatedStudent) => {
    setStudents((prevStudents) => {
      const updatedStudent = [...prevStudents];
      updatedStudent[index] = updatedStudent;
      return updatedStudent;
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["student-container"]}>
      <div className={styles["student-title"]}>
        <span className={styles["title"]}>Students Dashboard</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["student-container-bar"]}>
          <div className={styles["add-button-container"]}>
            <button className={styles["add-btn"]} onClick={handleAddStudent}>
              Add Student
            </button>
            {showModal && (
              <>
                <div className={styles["page-overlay"]} />
                <div className={styles["page-modal"]}>
                  <span className={styles.close} onClick={closeModal}>
                    &times;
                  </span>
                  <div className={styles["page-modal-content"]}>
                    <form onSubmit={handleSubmit}>
                      <h3>Add a Student</h3>
                      <label>
                        Student Name:
                        <input
                          type="text"
                          name="stu_name"
                          value={newStudent.stu_name || ""}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label>
                        Email:
                        <input
                          type="text"
                          name="email"
                          value={newStudent.email || ""}
                          onChange={handleInputChange}
                        />
                      </label>
                      <label>
                        GitHub:
                        <input
                          type="text"
                          name="github"
                          value={newStudent.github || ""}
                          onChange={handleInputChange}
                        />
                      </label>
                      <button
                        className={styles["page-submit-button"]}
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <StudentsTable
          studs={students}
          updateStudent={handleStudentAssessment}

        />
      </div>
    </div>
  );
};

export default StudentsPage;
