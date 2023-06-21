import React, { useContext, useEffect, useState } from "react";
import CohortContext from "../../../../../../../Context/CohortContext";
import styles from "./AssessmentCard.module.css";

const AssessmentCard = ({ assessment, closeModal, updateAssessment, selectedRow }) => {
  const [formData, setFormData] = useState({
    grade: assessment.grade || "",
    student_id: assessment.student_id || "",
    assess_id: assessment.assess_id || "",
    cohort_id: assessment.cohort_id || "",
  });
  const [updatedAssessment, setUpdatedAssessment] = useState(assessment);

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
        `http://localhost:8000/assessment_scores/${assessment.id}`,
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
         updateAssessment(selectedRow, updatedAssessmentData)

      } else {
        console.log("Error updating assessment");
      }
    } catch (error) {
      console.error(error);
    }
    closeCard();
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
            <div>Cohort Number: {updatedAssessment.cohort_number}</div>
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
        <form onSubmit={handleSubmit}>
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
            <label>Student ID:</label>
            <input
              type="text"
              name="student_id"
              value={formData.student_id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Assessment ID:</label>
            <input
              type="text"
              name="assess_id"
              value={formData.assess_id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Cohort ID:</label>
            <input
              type="text"
              name="cohort_id"
              value={formData.cohort_id}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Update Assessment</button>
        </form>
      </div>
    </div>
  );
};

export default AssessmentCard;
