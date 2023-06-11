import React, { useState } from 'react';
import AssessmentStudents from './AssessmentStudents/AssessmentStudents';

const AssessmentTable = ({ assessments, assessmentScores }) => {
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [students, setStudents] = useState([]);

  const handleRowClick = (assessmentId) => {
    const selectedStudents = assessmentScores.filter(
      (score) => score.assessmentId === assessmentId
    );

    setSelectedAssessment(assessmentId);
    setStudents(selectedStudents);
  };

  return (
    <div className="student-table">
      {selectedAssessment ? (
        <AssessmentStudents students={students} />
      ) : (
        <table>
          <thead>
            <tr className="student-table-header">
              <th>Assessment Name</th>
              <th>Assessment Type</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map((assessment, key) => (
              <tr
                key={key}
                className={`table-row ${
                  assessment.id === selectedAssessment ? 'selected' : ''
                }`}
                onClick={() => handleRowClick(assessment.id)}
              >
                <td>{assessment.assess_name}</td>
                <td>{assessment.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AssessmentTable;
