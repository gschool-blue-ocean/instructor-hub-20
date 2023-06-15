import React, { useContext, useEffect, useState } from "react";
import CohortContext from "../../../../../../../Context/CohortContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./AssessmentCard.module.css";

const AssessmentCard = ({ assessment }) => {
  const { setBodyDisplay } = useContext(CohortContext);
  const [formData, setFormData] = useState({
    grade: assessment.grade || "",
    student_id: assessment.student_id || "",
    assess_id: assessment.assess_id || "",
    cohort_id: assessment.cohort_id || "",
  });
  const [updatedAssessment, setUpdatedAssessment] = useState(assessment); // New state variable

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Remove empty values from formData
      const updatedFormData = Object.fromEntries(
        Object.entries(formData).filter(([key, value]) => value !== "")
      );

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
        // Handle successful update
        // You can show a success message or perform any additional actions
        setUpdatedAssessment({
          ...updatedAssessment,
          ...updatedFormData,
        });
        console.log("Assessment updated successfully");

        window.location.reload(); // Reload the page
      } else {
        // Handle unsuccessful update
        // You can show an error message or perform any additional actions
        console.log("Error updating assessment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (assessment) {
      setBodyDisplay("assessment");
    }
  }, [assessment]);

  if (!assessment) {
    return <div>No assessment selected</div>;
  }

  const isComplete = !!assessment.grade;

  return (
    <div className={styles["card-container"]}>
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
