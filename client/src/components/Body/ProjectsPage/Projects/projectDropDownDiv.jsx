import React, { useState, useEffect } from "react";

export default function ProjectDropDown() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
}, []);
    const fetchProjects = async() => {
        try{
      const response = await fetch('http://localhost:8000/projects');
      const text = await response.text();
      const data = JSON.parse(text)
      setProjects(data);
      
    } catch (err){
        console.error(err)
    }

}
  return (
    <div>
      <h2>Projects:</h2>
      <ul>
        {projects.map((projects) => (
          <li key={projects.id}>{projects.project_name}</li>
        ))}
      </ul>
    </div>
  )};
