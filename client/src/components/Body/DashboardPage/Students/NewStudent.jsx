import React, { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext.jsx';
import '../../../../styles/Students.css';

const NewStudent = (props) => {
  const { cohort } = useContext(CohortContext);


  if (!props.showModal) {
    return null;
  }

  function gatherValues() {
    let name = document.getElementById('studentName');
    let email = document.getElementById('email');
    let gitHub = document.getElementById('gitHub');
    let allValues = {};
    allValues.name = name.value;
    allValues.email = email.value;
    allValues.gitHub = gitHub.value;
    return allValues;
  }

  function handleClick() {
    let newStudent = gatherValues();
    console.log(newStudent);

    props.onClose();
  }

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`http://localhost:8000/students/${cohort}`);
  //     const studs = await response.json();
  //     setStudents(studs);
  //     console.log(studs);
  //   })();
  //   return () => {};
  // }, [cohort]);

  return (
    <div
      className='student-modal'
      onClick={props.onClose}
    >
      <div
        className='student-modal-form'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='student-modal-header'>
          <h3 className='student-modal-title'>
            Add a New Student to MCSP-{cohort}
          </h3>
        </div>
        <div className='student-modal-body'>
          <div className='input-frame'>
            <label htmlFor='name'>First and Last Name: </label>
            <input
              className='input-box'
              type='text'
              name='name'
              id='studentName'
              placeholder='name...'
              required
            ></input>
          </div>
          <div className='input-frame'>
            <label htmlFor='email'>Email Address: </label>
            <input
              className='input-box'
              type='text'
              name='email'
              id='email'
              placeholder='email...'
              required
            ></input>
          </div>
          <div className='input-frame'>
            <label htmlFor='github'>GitHub Account: </label>
            <input
              className='input-box'
              type='text'
              name='github'
              id='gitHub'
              placeholder='github...'
              required
            ></input>
          </div>
        </div>
        <div className='student-modal-buttons'>
          <button
            onClick={handleClick}
            className='add-student'
          >
            Add Student
          </button>
          <button
            onClick={props.onClose}
            className='cancel-student'
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
};

export default NewStudent;
