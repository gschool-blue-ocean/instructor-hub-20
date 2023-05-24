import React, { useState, useContext } from 'react';
import NewCohort from './NewCohort.jsx';
import CohortContext from '../../../Context/CohortContext.jsx';
import '../../../../styles/DashboardMenu.css';
import Assessments from './assessments.jsx';

const DashboardMenu = () => {
  const [showCohort, setShowCohort] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const { cohort } = useContext(CohortContext);

  function handleClick() {
    setShowCohort(true);
  }

  function handleAssessmentClick () {
    setShowAssessment(true)
    console.log("button works");
  }

  return (
    <div id='DashboardMenu'>
      <button onClick={handleAssessmentClick}>Assessments</button>
      <button onClick={handleClick}>Create New Cohort</button>
      <NewCohort showCohort={showCohort} onClose={()=> setShowCohort(false)}/>
      {showAssessment && <Assessments closeAssessment={setShowAssessment}/>}
    </div>
  );
};

export default DashboardMenu;
