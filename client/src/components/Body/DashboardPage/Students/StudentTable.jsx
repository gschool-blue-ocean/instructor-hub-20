import React, { useContext, useState } from 'react';
import UpdateStudent from './UpdateStudent.jsx';
import '../../../../styles/Students.css';

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
        <tr className='student-table-header'>
          <th>Name</th>
          <th>Email</th>
          <th>GitHub</th>
          <th>Graduation Date</th>
          <th>Cohort</th>
        </tr>
        {stud.map((val, key) => {
          return (
            <>
              <tr
                className='table-row'
                key={`Student${key}`}
                onClick={() =>
                  (document.getElementById(`Student${key}`).style.display =
                    'flex')
                }
              >
                <td>{val.stu_name}</td>
                <td>{val.email}</td>
                <td>{val.github}</td>
                <td>{val.graduation}</td>
                <td>{val.cohort_number}</td>
              </tr>
              <button
                className='delete-student'
                onClick={() => handleDelete(val.id, val.stu_name)}
              >
                Delete
              </button>
              <UpdateStudent
                keyID={`Student${key}`}
                stud={val}
                onAdd={onAdd}
              />
            </>
          );
        })}
      </table>
    </div>
  );
};

export default StudentTable;
