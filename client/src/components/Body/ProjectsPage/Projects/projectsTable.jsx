import React from 'react';
import { ProjectDropDown } from './projectDropDownDiv.jsx';

const ProjectsTable = ({ projects }) => {
  return (
    <div className='student-table'>
      <table>
        <thead>
          <tr className='student-table-header'>
            <th>Group name</th>
            <th>Students</th>
            <th>Project</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, key) => {
            return (
              <tr
                key={key}
                className='table-row'
              >
                <td>{project.group_name}</td>
                <td>
                  {project.student1} · {project.student2} · {project.student3} ·{' '}
                  {project.student4} · {project.student5} · {project.student6}
                </td>
                <td>{project.project_name}</td>
                <td>{project.project_score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
