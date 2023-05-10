import React, { useState, useEffect } from "react";

export default function CohortDropDown() {
  const [cohort, setCohort] = useState([]);
  const [selectedCohort, setSelectedCohort] = useState("");
  const [cohortSelection, onCohortSelection] = useState("")

  useEffect(() => {
    fetchCohorts();
  }, []);

  const fetchCohorts = async () => {
    try {
      const response = await fetch('http://localhost:8000/cohorts');
      const data = await response.json();
      setCohort(data);
    } catch (err) {
      console.error(err);
    }
  }

   function handleCohortSelection(event) {
    const selectedCohortValue = event.target.value;
    setSelectedCohort(selectedCohortValue);
    onCohortSelection(selectedCohortValue); // Call the prop function
  }
  

  return (
    <div>
      <h2>Cohorts:</h2>
      <select value={selectedCohort} onChange={handleCohortSelection}>
        <option value="">Select a cohort</option>
        {cohort.map((cohorts) => (
          <option key={cohorts.id} value={cohorts.id}>
            {cohorts.cohort_number}: {cohorts.start} - {cohorts.graduation} | {cohorts.instructor}
          </option>
        ))}
      </select>
    </div>
  );
};
