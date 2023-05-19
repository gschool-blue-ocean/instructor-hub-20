import React, { useState, useEffect } from "react";
import "../../../../styles/Projects.css";
import { ProjectDropDown, CohortDropDown } from "./projectDropDownDiv.jsx";
import './dropDown.css';
import ProjectsTable from "./projectsTable.jsx"

const Projects = () => {
  const [selectedCohort, setSelectedCohort] = useState(null);
  const [projects, setProjects] = useState([]);

  function handleCohortSelection(cohort){
    console.log("Selected Cohort:", cohort);
    setSelectedCohort(cohort);
  }

  useEffect(() => {
    fetchProjects();
  }, [selectedCohort]);

  const fetchProjects = () => {
    if (selectedCohort) {
      const cohortId = JSON.parse(selectedCohort).cohort_number;
      fetch(`http://localhost:8000/student_project_scores/${cohortId}`)
        .then(response => response.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err));
        console.log("which cohort was selected?" ,cohortId)
      }
  };

  // useEffect(() => {
  //   console.log("Projects:", projects);
  // }, [projects])


  return (
    <div>
      <div id="Projects" className="building-block">
        Projects
        <CohortDropDown onCohortChange={handleCohortSelection}/>
        <ProjectDropDown projects={projects}/> 
      </div>
      <div>
        <ProjectsTable projects={projects}/> 
      </div>
    </div>
  );
};

export default Projects;
