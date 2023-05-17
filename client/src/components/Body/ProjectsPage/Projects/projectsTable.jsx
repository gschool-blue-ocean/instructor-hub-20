import React from "react";
import { ProjectDropDown } from "./projectDropDownDiv.jsx";

const ProjectsTable = ({ projects }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Group name</th>
          <th>Students</th>
          <th>Project</th>
          <th>Score</th>
        </tr>
        {projects.map((project, key) => {
          return (
            <tr key={`project${key}`}>
              <td>{project.group_name}</td>
              <td>
                <p>
                  {project.student1} | {project.student2} | {project.student3}
                </p>{" "}
                <p>
                  {project.student4} | {project.student5} | {project.student6}
                </p>
              </td>
              <td>{project.project_name}</td>
              <td>{project.project_score}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ProjectsTable;
