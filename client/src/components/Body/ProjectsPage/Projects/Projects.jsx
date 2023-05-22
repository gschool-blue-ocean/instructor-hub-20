import React, { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext';
import '../../../../styles/Projects.css';
import { ProjectDropDown } from './projectDropDownDiv.jsx';
import './dropDown.css';
import ProjectsTable from './projectsTable.jsx';

const Projects = () => {
  const { cohort } = useContext(CohortContext);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, [cohort]);

  const fetchProjects = () => {
    if (cohort) {
      fetch(`http://localhost:8000/student_project_scores/${cohort}`)
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div className='building-block'>
        <h1>{`MCSP-${cohort} · Projects`}</h1>
        <ProjectDropDown projects={projects} />
        <ProjectsTable projects={projects} />
      </div>
    </div>
  );
};

export default Projects;
