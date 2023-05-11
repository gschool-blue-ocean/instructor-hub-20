import React, { useState, useEffect, useContext } from 'react';
import CohortContext from '../../../Context/CohortContext.jsx';
import '../../../../styles/Students.css';

const UpdateStudent = ({stud, keyID, onAdd}) => {
    const { stu_name, email, github } = stud;
    const { cohort } = useContext(CohortContext);

    function handleCancel() {
        const formName = document.getElementById(`updateName${keyID}`);
        const formEmail = document.getElementById(`updateEmail${keyID}`);
        const formGithub = document.getElementById(`updateGithub${keyID}`);
        formName.value = formName.defaultValue;
        formEmail.value = formEmail.defaultValue;
        formGithub.value = formGithub.defaultValue;
        document.getElementById(keyID).style.display = "none";
    }

    function gatherValues() {
        let name = document.getElementById(`updateName${keyID}`);
        let email = document.getElementById(`updateEmail${keyID}`);
        let gitHub = document.getElementById(`updateGithub${keyID}`);
        let allValues = {};
        allValues.stu_name = name.value;
        allValues.email = email.value;
        allValues.gitHub = gitHub.value;
        allValues.cohort_number = parseInt(cohort);
        return allValues;
    }

    function handleClick() {
        const updateStud = gatherValues();
        console.log(updateStud);
        // fetch('http://localhost:8000/students', 
        // { 
        //     method: 'PUT',
        //     credentials: "same-origin",
        //     headers: {"Content-Type": 'application/json'},
        //     body: JSON.stringify(updateStud)
        // })
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .then(onAdd());
        handleCancel();
    }

  
    return (
      <div className='update-modal' id={keyID} onClick={handleCancel}>
        <div className='student-modal-form' onClick={e => e.stopPropagation()}>
            <div className='student-modal-header'>
                <h3 className='student-modal-title'>Update Student</h3>
            </div>
            <div className='student-modal-body'>
                <div>
                    <label htmlFor="name">First and Last Name: </label>
                    <input className="input-box" type="text" name='name' id={`updateName${keyID}`} defaultValue={stu_name} required></input>
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input className="input-box" type="text" name='email' id={`updateEmail${keyID}`} defaultValue={email} required></input>
                </div>
                <div>
                    <label htmlFor="github">GitHub Account: </label>
                    <input className="input-box" type="text" name='github' id={`updateGithub${keyID}`} defaultValue={github} required></input>
                </div>
            </div>
            <div className='student-modal-buttons'>
                <button onClick={handleClick} className='add-student'>Update Student</button>
                <button onClick={handleCancel} className='cancel-student'>Cancel</button>
            </div>
        </div>        
      </div>
    );
};
  
  export default UpdateStudent;