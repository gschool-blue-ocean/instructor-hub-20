import React from 'react';
import '../../../../styles/Students.css';


const StudentTable = ({stud}) => {
    const { stu_name, cohort_number, email, github, graduation, id } = stud;
  
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
                    <tr  key={`Student${key}`}>
                        <td>{val.stu_name}</td>
                        <td>{val.email}</td>
                        <td>{val.github}</td>
                        <td>{val.graduation}</td>
                        <td>{val.cohort_number}</td>
                        <button className='update-student'>Update</button>
                        <button className='delete-student'>Delete</button>
                    </tr>
                )
            })}
        </table>        
      </div>
    );
  };

  export default StudentTable;