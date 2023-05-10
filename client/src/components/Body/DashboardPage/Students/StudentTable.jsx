import React, { useContext, useState } from 'react';
import UpdateStudent from './UpdateStudent.jsx';
import '../../../../styles/Students.css';


const StudentTable = ({ stud, onAdd }) => {
    // const [showUpdate, setShowUpdate] = useState(false);

    function handleDelete(num) {
      let studNum = parseInt(num);
      fetch(`http://localhost:8000/students/${studNum}`, 
      { 
          method: 'DELETE',
          credentials: "same-origin",
          headers: {"Content-Type": 'application/json'}
      })
      .then(response => response.json())
      .then(onAdd());
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
              <th></th>
            </tr>
            {stud.map((val, key) => {
                return (
                    <tr className='table-row' key={`Student${key}`} onClick={()=> document.getElementById(`Student${key}`).style.display = "flex"}>
                        <td>{val.stu_name}</td>
                        <td>{val.email}</td>
                        <td>{val.github}</td>
                        <td>{val.graduation}</td>
                        <td>{val.cohort_number}</td>
                        <td><button className='delete-student' onClick={()=> handleDelete(val.id)}>Delete</button></td>
                        <UpdateStudent keyID={`Student${key}`} stud={val} />
                    </tr>
                )
            })}
        </table>        
      </div>
    );
  };

  export default StudentTable;