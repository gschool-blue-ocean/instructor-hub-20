import React, { useState, useEffect, useContext } from "react";
import CohortContext from "../../../Context/CohortContext";
import "./Projects.css";
import { ProjectDropDown } from "./ProjectsDropDown/ProjectDropDown.jsx";
import "./ProjectsDropDown/ProjectDropDown.css";
import ProjectsTable from "./ProjectsTable/ProjectsTable.jsx";

const Projects = () => {
  const { cohort } = useContext(CohortContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, [cohort]);

  const fetchProjects = () => {
    if (cohort) {
      fetch(
        `https://blueocean-instructorhub.onrender.com/student_project_scores/${cohort}`
      )
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div className="building-block">
        <h1>{`MCSP-${cohort} · Projects`}</h1>
        <ProjectDropDown projects={projects} />
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
