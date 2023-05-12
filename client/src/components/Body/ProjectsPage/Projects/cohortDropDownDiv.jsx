import React, { useState, useEffect } from 'react';

export default function CohortDropDown() {
  const [cohort, setCohort] = useState([]);

  useEffect(() => {
    fetchCohorts();
  }, []);
  const fetchCohorts = async () => {
    try {
      const response = await fetch('http://localhost:8000/cohorts');
      const text = await response.text();
      const data = JSON.parse(text);
      setCohort(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <h2>Cohorts:</h2>
      <ul>
        {cohort.map((cohorts) => (
          <li key={cohorts.id}>
            {cohorts.cohort_number}: {cohorts.start} - {cohorts.graduation}{' '}
            {cohorts.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
}
