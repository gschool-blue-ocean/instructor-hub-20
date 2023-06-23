import React, { useContext, useEffect, useState } from "react";
import CohortContext from "../../../../../../../Context/CohortContext";
import styles from "./AssessmentCard.module.css";

const AssessmentCard = ({
  assessment,
  closeModal,
  updateAssessment,
  selectedRow,
  students,
  assess,
}) => {
  const [formData, setFormData] = useState({
    grade: assessment.grade || "",
    student_id: assessment.student_id || "",
    assess_id: assessment.assess_id || "",
    cohort_id: assessment.cohort_id || "",
  });
  const [updatedAssessment, setUpdatedAssessment] = useState(assessment);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      updatedFormData.student_id = parseInt(updatedFormData.student_id);
      updatedFormData.assess_id = parseInt(updatedFormData.assess_id);

      const response = await fetch(
        `http://localhost:8000/student_assessment_scores/${assessment.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (response.ok) {
        const updatedAssessmentData = {
          ...updatedAssessment,
          ...updatedFormData,
        };
        setUpdatedAssessment(updatedAssessmentData);
        console.log("Assessment updated successfully");
        updateAssessment(selectedRow, updatedAssessmentData);
        window.alert("Assessment Successfully Updated");
      } else {
        console.log("Error updating assessment");
      }
    } catch (error) {
      console.error(error);
    }
    closeCard();
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      const response = await fetch(
        `http://localhost:8000/student_assessment_scores/${assessment.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Assessment deleted successfully");
        window.alert("Assessment Succesfully Deleted")
      } else {
        console.log("Error deleting assessment");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
      closeCard();
    }
  };

  const isComplete = !!assessment.grade;

  const closeCard = () => {
    closeModal();
  };

  return (
    <div className={styles["card-container"]}>
      <span className={styles.close} onClick={closeCard}>
        &times;
      </span>
      <div className={styles["card-container-bar"]}>
        <div className={styles["card-content"]}>
          <div className={styles["student-basic"]}>
            <div>Student Name: {updatedAssessment.student_name}</div>
            <div>Assessment Name: {updatedAssessment.assess_name}</div>
            <div>Grade: {updatedAssessment.grade}</div>
            {/* <div>Cohort Number: {updatedAssessment.cohort_number}</div> */}
          </div>
          <div className={styles["student-other"]}>
            <div className={styles["completion-status"]}>
              Completion Status:{" "}
              <span
                className={isComplete ? styles.complete : styles.incomplete}
              >
                {isComplete ? "Complete" : "Incomplete"}
              </span>
            </div>
          </div>
        </div>
        <form className={styles["card-modal"]} onSubmit={handleSubmit}>
          <h3>Edit Assessment</h3>
          <div>
            <label>Grade:</label>
            <input
              type="text"
              name="grade"
              value={formData.grade}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>
              Student:
              <select
                name="student_id"
                value={formData.student_id || ""}
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
          </div>
          <div>
            <label>
              Assessment:
              <select
                name="assess_id"
                value={formData.assess_id || ""}
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
          </div>
          <div className={styles['button-cont']}>
          <button className={styles['update-button']} type="submit">Update Assessment</button>
          <button className={styles["delete-button"]} onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete Assessment"}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssessmentCard;
