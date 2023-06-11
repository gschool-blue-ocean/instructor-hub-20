import React, { useState, useEffect, useContext } from "react";
import CohortContext from "../../../Context/CohortContext";
import "../../ProjectsPage/ProjectsPage.css";
import AssessmentDropDown from './AssessmentsDropDown/AssessmentDropDown'
import AssessmentsTable from './AssessmentTable/AssessmentTable'
import "../../ProjectsPage/Projects/ProjectsDropDown/ProjectDropDown.css";


const Assessments = () => {
  const { cohort } = useContext(CohortContext);
  const [assessments, setAssessments] = useState([]);
  const [assessmentScores, setAssessmentScores] = useState([]);

  useEffect(() => {
    fetchAssessments();
    fetchAssessmentScores();
  }, [cohort]);

  const fetchAssessments = () => {
    if (cohort) {
      fetch(
        `http://localhost:8000/assessments`
      )
        .then((response) => response.json())
        .then((data) => setAssessments(data))
        .catch((err) => console.error(err));
    }
  };

  const fetchAssessmentScores = () => {
    if (cohort) {
      fetch(
        `http://localhost:8000/assessment_scores`
      )
        .then((response) => response.json())
        .then((data) => setAssessmentScores(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div className="building-block">
        <h1>{`MCSP-${cohort} · Assessments`}</h1>
        <AssessmentDropDown assessments={assessments} />
        <AssessmentsTable assessments={assessments} assessmentScores={assessmentScores} />
      </div>
    </div>
  );
};

export default Assessments;
