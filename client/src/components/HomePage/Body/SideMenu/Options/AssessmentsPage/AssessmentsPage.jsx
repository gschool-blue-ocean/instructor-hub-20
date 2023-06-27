import React, { useState, useEffect, useContext } from "react";
import styles from "./AssessmentsPage.module.css";
import AssessmentsTable from "./AssessmentsTable/AssessmentsTable";
import CohortContext, {
  CohortProvider,
} from "../../../../../Context/CohortContext";

const AssessmentsPage = () => {
  const [assessments, setAssessments] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const { cohort } = useContext(CohortContext);
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [assess, setAssess] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAssessment, setNewAssessment] = useState({
    student_id: "",
    assess_id: "",
    grade: "",
    cohort_id: cohort,
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `/api/student_assessment_scores/${cohort}`
      );

      const assess = await response.json();
      setAssessments(assess);
    })();
    return () => {};
  }, [cohort, assessments]);

  const handleUpdateAssessment = (index, updatedAssessment) => {
    setAssessments((prevAssessments) => {
      const updatedAssessments = [...prevAssessments];
      updatedAssessments[index] = updatedAssessment;
      return updatedAssessments;
    });
  };

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await fetch(`/api/students/${cohort}`);
      const studentsData = await response.json();
      setStudents(studentsData);
    };

    fetchStudents();

    const fetchAssessments = async () => {
      const response = await fetch(`/api/assessments`);
      const assess = await response.json();
      setAssess(assess);
    };

    fetchAssessments();

    return () => {};
  }, [cohort]);

  const handleAddAssessment = () => {
    setShowModal(!showModal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAssessment((prevAssessment) => ({
      ...prevAssessment,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { student_id, assess_id, grade } = newAssessment;

    const response = await fetch("/api/student_assessment_scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        student_id,
        assess_id,
        grade,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      setShouldUpdate(!shouldUpdate);
      setShowModal(false);
      setNewAssessment({
        student_id: "",
        assess_id: "",
        grade: "",
        cohort_id: cohort,
      });
      window.alert("Assessment Successfully Added");
    } else {
      console.error("Failed to add assessment.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles["student-container"]}>
      <div className={styles["student-title"]}>
        <span className={styles["title"]}>Assessments Dashboard</span>
      </div>
      <div className={styles["table-container"]}>
        <div className={styles["student-container-bar"]}>
          <div className={styles["add-button-container"]}>
          <button id="add-assessment-btn" className={styles["add-btn"]}>
            Add Assessment
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
                      <h3>Add an Assessment</h3>
                      <label>
                        Student:
                        <select
                          name="student_id"
                          value={newAssessment.student_id || ""}
                          onChange={handleInputChange}
                        >
                          <option value="">Select a student</option>
                          {students.map((student) => (
                            <option key={student.id} value={student.id}>
                              {student.stu_name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Assessment:
                        <select
                          name="assess_id"
                          value={newAssessment.assess_id || ""}
                          onChange={handleInputChange}
                        >
                          <option value="">Select an assessment</option>
                          {assess.map((ass) => (
                            <option key={ass.id} value={ass.id}>
                              {ass.assess_name}
                            </option>
                          ))}
                        </select>
                      </label>
                      <label>
                        Grade:
                        <input
                          type="text"
                          name="grade"
                          value={newAssessment.grade || ""}
                          onChange={handleInputChange}
                        />
                      </label>
                      <button className={styles["page-submit-button"]} type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className={styles["table-cont"]}>
          <CohortProvider>
            <AssessmentsTable
              assessments={assessments}
              updateAssessment={handleUpdateAssessment}
              students={students}
              assess={assess}
            />
          </CohortProvider>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsPage;
