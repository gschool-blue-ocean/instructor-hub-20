import React, { useState } from "react";
import "../../../../styles/Projects.css";
import CohortDropDown from "./cohortDropDownDiv.jsx"
import ProjectDropDown from "./projectDropDownDiv.jsx"

const Projects = () => {
  const [openDiv, setOpenDiv] = useState(false);
  const cohortDropDown = "cohortDropDown";
  const projectDropDown = "projectDropDown";
  return (
    <div id="Projects" className="building-block">
      Projects
      <button
        className="cohortDropDown"
        onClick={() => setOpenDiv(cohortDropDown)}
      >
        Select Cohort Dropdown
      </button>
      <button
        className="projectDropDown"
        onClick={() => setOpenDiv(projectDropDown)}
      >
        Project Dropdown
      </button>
      {openDiv === "cohortDropDown" ? <CohortDropDown /> : null}
      {openDiv === "projectDropDown" ? <ProjectDropDown /> : null}
    </div>
  );
};

export default Projects;
