import React from "react";

const Assessments = ({closeAssessment}) => {

  return (
    <div>
      <div className="student-modal">
        <div className="student-modal-form">
        <button onClick={()=>closeAssessment(false)}>x</button>
        <div className="student-modal-header">
        <h1>Assessment</h1>
        </div>
        <div className="studant-modal-buttons"></div>
        <button>Next</button>
      </div>
      </div>
    </div>
  );
};

export default Assessments;
