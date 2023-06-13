import React from 'react';
import styles from './StudentsTable.module.css';

const StudentsTable = ({ studs }) => {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <table>
          <thead>
            <tr>
              <th className={styles.column1}>Name</th>
              <th className={styles.column2}>Email</th>
              <th className={styles.column3}>Github</th>
              <th className={styles.column4}>Grad Date</th>
              <th className={styles.column5}>Cohort</th>
              <th className={styles.column6}>Options</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.tableBody}>
        <table>
          <tbody>
            {studs.map((stud, index) => {
              return (
                <tr key={`Student_${index}`}>
                  <td>{stud.stu_name}</td>
                  <td>{stud.email}</td>
                  <td>{stud.github}</td>
                  <td>{stud.graduation}</td>
                  <td>{stud.cohort_number}</td>
                  <td>options</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsTable;
