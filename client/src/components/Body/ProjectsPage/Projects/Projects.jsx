import React, { useState } from "react";
import "../../../../styles/Projects.css";
import CohortDropDown from "./cohortDropDownDiv.jsx";
import ProjectDropDown from "./projectDropDownDiv.jsx";
import './dropDown.css';

const Projects = () => {
  const [selectedCohort, setSelectedCohort] = useState("");

  const handleCohortSelection = (cohortValue) => {
    setSelectedCohort(cohortValue);
  };

  return (
    <div id="Projects" className="building-block">
      Projects
       <CohortDropDown onCohortSelection={handleCohortSelection} /> 
       <ProjectDropDown selectedCohort={selectedCohort} /> 
    </div>
  );
};

export default Projects;
