import React, { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext.jsx';
import StudentTable from './StudentTable.jsx';
import NewStudent from './NewStudent.jsx';
import '../../../../styles/Students.css';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [addStudent, setAddStudent] = useState(false);
  const { cohort } = useContext(CohortContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/students/${cohort}`);
      const studs = await response.json();
      setStudents(studs);
      console.log(studs);
      if (addStudent) {
        setAddStudent(false);
      }
    })();
    return () => {};
  }, [cohort, addStudent]);

  return (
    <div>
      <div
        id='Students'
        className='building-block'
      >
        <div className='students-block-header'>
          <h1>{`MCSP-${cohort}   ·  Students`}</h1>
          <button onClick={() => setShowModal(true)}>Add Student</button>
        </div>
        <NewStudent
          onClose={() => setShowModal(false)}
          showModal={showModal}
          onAdd={() => setAddStudent(true)}
        />
        <StudentTable
          stud={students}
          onAdd={() => setAddStudent(true)}
        />
      </div>
    </div>
  );
};

export default Students;
