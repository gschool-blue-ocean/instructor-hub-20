import React, { useState, useEffect } from "react";
import CohortContext from '../../../'

export default function ProjectDropDown({selectedCohort}) {
  const [projects, setProjects] = useState([]);
  // const [cohort, setCohort] = useState([""])

  useEffect(() => {
    fetchProjects();
  }, [selectedCohort]);


  const fetchProjects = async () => {
    try {
      const response = await fetch(`http://localhost:8000/student_project_scores/${selectedCohort}`);
      const text = await response.text();
      const data = JSON.parse(text);
      setProjects(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2>Projects:</h2>
      <select>
        <option value="">Select a project</option>
        {projects.map((student_project_scores) => (
  <option key={student_project_scores.id} value={student_project_scores.id}>
    {student_project_scores.student_name} | {student_project_scores.project_name} | {student_project_scores.project_score}
  </option>
))}

      </select>
    </div>
  );
}
