import React, { useState, useEffect } from "react";
// import CohortContext from "../../../Context/CohortContext.jsx";
// import { useContext } from "react";

export function ProjectDropDown({projects}) {

  return (
    <div>
      <h2>Projects:</h2>
      <select>
        <option value="">Select a project</option>
        {projects.map((student_project_scores) => (
          <option
            key={student_project_scores.id}
            value={student_project_scores.id}
          >
            {student_project_scores.group_name}
            {student_project_scores.student_name} 
            {student_project_scores.project_name} 
            {student_project_scores.project_score}
          </option>
        ))}
      </select>
    </div>
  );
}
  

  export function CohortDropDown({ onCohortChange }) {
    const [cohorts, setCohorts] = useState([]);
  
    useEffect(() => {
      fetchCohorts();
    }, []);
  
    const fetchCohorts = () => {
      fetch("http://localhost:8000/cohorts")
        .then(response => response.json())
        .then(data => {
          setCohorts(data);
        })
        .catch(err => {
          console.error(err);
        });
    };
  
    function changeCohort(e) {
      // const selectedCohort = cohorts.find(cohort => cohort.id === e.target.value);
      onCohortChange(e.target.value);
    }
  
    // console.log("what's in here", cohorts);
    
    return (
      <div>
        
        <h2>Cohort</h2>
        <select onChange={changeCohort}>
          {cohorts.map(cohort => (
            <option key={cohort.id} value={JSON.stringify(cohort)}>
             MCSP {cohort.cohort_number}: {cohort.start} - {cohort.graduation} | {cohort.instructor}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
