import React, { useState } from "react";
import "../../../../styles/Projects.css";
// import CohortDropDown from "./cohortDropDownDiv.jsx";
import { ProjectDropDown, CohortDropDown } from "./projectDropDownDiv.jsx";
import './dropDown.css';
// import CohortDropDown from "./cohortDropDownDiv";

const Projects = () => {
  const [selectedCohort, setSelectedCohort] = useState(null);

  function handleCohortSelection(cohort){
    console.log("Selected Cohort:", cohort);
    setSelectedCohort(cohort);
  }

  return (
    <div id="Projects" className="building-block">
      Projects
       <CohortDropDown onCohortChange={handleCohortSelection}/>
       <ProjectDropDown selectedCohort={selectedCohort}/> 
    </div>
  );
};

export default Projects;
