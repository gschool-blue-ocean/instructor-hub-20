import React, {useState, useEffect} from 'react';
import '../../../../styles/Students.css';


const StudentTable = ({stud}) => {
    const { stu_name, cohort_number, email, github, graduation } = stud;
  
    return (
      <div className='student-table'>
        <table>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>GitHub</th>
            <th>Graduation Date</th>
            <th>Cohort</th>
            </tr>
            {stud.map((val, key) => {
                return (
                    <tr key={key}>
                        <td>{val.stu_name}</td>
                        <td>{val.email}</td>
                        <td>{val.github}</td>
                        <td>{val.graduation}</td>
                        <td>{val.cohort_number}</td>
                    </tr>
                )
            })}
        </table>        
      </div>
    );
  };

  export default StudentTable;