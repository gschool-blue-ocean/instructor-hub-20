import React, { useContext, useState } from 'react';
import UpdateStudent from './UpdateStudent.jsx';
import '../../../../styles/Students.css';
import trashcan from '../../../../styles/svgs/trashcan.svg';

const StudentTable = ({ stud, onAdd }) => {
  function handleDelete(num, name) {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      const studNum = parseInt(num);
      fetch(`http://localhost:8000/students/${studNum}`, {
        method: 'DELETE',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => response.json())
        .then(onAdd());
    }
  }

  return (
    <div className='student-table'>
      <table>
        <thead>
          <tr className='student-table-header'>
            <th key='nameHead'>Name</th>
            <th key='emailHead'>Email</th>
            <th key='githubHead'>GitHub</th>
            <th key='gradHead'>Graduation Date</th>
            <th key='cohortHead'>Cohort</th>
            <th key='optionsHead'>Options</th>
          </tr>
        </thead>
        <tbody>
          {stud.map((val, key) => {
            return (
              <>
                <tr
                  className='table-row'
                  key={`Student${key}`}
                >
                  <td key={`Stu_Name${key}`}>{val.stu_name}</td>
                  <td key={`Email${key}`}>{val.email}</td>
                  <td key={`Github${key}`}>{val.github}</td>
                  <td key={`Grad${key}`}>{val.graduation}</td>
                  <td key={`Cohort${key}`}>{val.cohort_number}</td>
                  <td key={`Buttons${key}`}>
                    <button
                      key={`update${key}`}
                      className='update-student'
                      onClick={() =>
                        (document.getElementById(
                          `Student${key}`
                        ).style.display = 'flex')
                      }
                    >
                      Update
                    </button>
                    {/* <button
                      key={`delete${key}`}
                      className='delete-student'
                      onClick={() => handleDelete(val.id, val.stu_name)}
                    > */}
                    <img
                      id='trashcan-svg'
                      src={trashcan}
                      alt='trash can'
                      onClick={() => handleDelete(val.id, val.stu_name)}
                    />
                    {/* </button> */}
                  </td>
                </tr>

                <UpdateStudent
                  keyID={`Students${key}`}
                  stud={val}
                  onAdd={onAdd}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
