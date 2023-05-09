import React, { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext.jsx';
import StudentTable from "./StudentTable.jsx";
import '../../../../styles/Students.css';

const Students = () => {
  const [students, setStudents] = useState([]);
  const { cohort } = useContext(CohortContext);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/students/${cohort}`);
          const studs = await response.json();
          setStudents(studs);
          console.log(studs);
    })();
    return () => {};
  }, [cohort]);

  return (
    <div>
      <div id='Students' className='building-block'>
        Students
        <button>Add Students</button>
        <StudentTable stud={students} />
      </div>
    </div>
  );
};

export default Students;
