import React, { useState, useEffect } from "react";
import './Assessments.css'
import AssessmentDropdown from "./AssessmentsDropDown/AssessmentDropDown";

const Assessments = ({ closeAssessment }) => {
  const [assessment, setAssessment] = useState([]);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = () => {
    fetch("http://localhost:8000/assessments")
      .then((response) => response.json())
      .then((data) => setAssessment(data));
  };
  console.log("assessments:", assessment);

  return (
    <div>
      <div className="assessment-modal">
        <div className="assessment-modal-form">
          <div className="studant-modal-buttons">
            <button onClick={() => closeAssessment(false)}>x</button>
          </div>
          <div className="assessment-modal-header">
            <h1>Assessment</h1>
          </div>
          <div className="assessment-modal-body">
            <AssessmentDropdown></AssessmentDropdown>
          </div>
          <div className="assessment-modal-buttons"></div>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Assessments;
