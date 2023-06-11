import React from 'react'

const AssessmentStudents = ({students}) => {
  return (
    <table>
    <thead>
      <tr>
        <th>Student</th>
        <th>Score</th>
        <th>Cohort</th>
      </tr>
    </thead>
    <tbody>
      {students.map((student, key) => (
        <tr key={key}>
          <td>{student.student_id}</td>
          <td>{student.grade}</td>
          <td>{student.cohort_id}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default AssessmentStudents