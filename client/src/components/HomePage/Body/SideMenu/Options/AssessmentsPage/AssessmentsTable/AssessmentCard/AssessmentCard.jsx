import React, { useContext, useEffect, useState } from "react";
import CohortContext from "../../../../../../../Context/CohortContext";
import styles from "./AssessmentCard.module.css";

const AssessmentCard = ({ assessment, closeModal }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const [formData, setFormData] = useState({
    grade: assessment.grade || "",
    student_id: assessment.student_id || "",
    assess_id: assessment.assess_id || "",
    cohort_id: assessment.cohort_id || "",
  });
  const [updatedAssessment, setUpdatedAssessment] = useState(assessment);
  const [shouldUpdate, setShouldUpdate] = useState(false); // State variable to trigger rerender

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

      const response = await fetch(
        `https://blueoceanapi.onrender.com/student_assessment_scores/${assessment.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedFormData),
        }
      );

      if (response.ok) {
        setUpdatedAssessment({
          ...updatedAssessment,
          ...updatedFormData,
        });
        console.log("Assessment updated successfully");
        setShouldUpdate(true); // Set the state variable to trigger the rerender
      } else {
        console.log("Error updating assessment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (shouldUpdate) {
      setBodyDisplay("assessmentTable"); // Update the body display to trigger the AssessmentPage component rerender
      setShouldUpdate(false); // Reset the state variable
    }
  }, [shouldUpdate, setBodyDisplay]);

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
