
import React, { useState, useEffect } from 'react';

import '../../../../styles/Students.css';

const StudentTable = ({ stud }) => {
  const { stu_name, cohort_number, email, github, graduation } = stud;


  return (
    <div className='student-table'>
      <table>
        <tr className='student-table-header'>
          <th>Name</th>
          <th>Email</th>
          <th>GitHub</th>
          <th>Grad. Date</th>
          <th>Cohort</th>
        </tr>
        {stud.map((val, key) => {
          return (
            <tr
              key={key}
              className='table-row'
            >
              <td className='table-data'>{val.stu_name}</td>
              <td className='table-data'>{val.email}</td>
              <td className='table-data'>{val.github}</td>
              <td className='table-data'>{val.graduation}</td>
              <td className='table-data'>{val.cohort_number}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};


export default StudentTable;
