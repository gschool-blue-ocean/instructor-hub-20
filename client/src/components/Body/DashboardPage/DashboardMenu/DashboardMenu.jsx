import React, { useState, useContext } from "react";
import NewCohort from "./NewCohort/NewCohort.jsx";
import CohortContext from "../../../Context/CohortContext.jsx";
import "./DashboardMenu.css";
import Assessments from "./Assessments/Assessments.jsx";
import Dropdown from "../../../NavBar/Dropdown/Dropdown.jsx";

const DashboardMenu = () => {
  const [showCohort, setShowCohort] = useState(false);
  const [showAssessment, setShowAssessment] = useState(false);
  const { cohort } = useContext(CohortContext);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setShowCohort(true);
  }

  function handleAssessmentClick() {
    setShowAssessment(true);
    console.log("button works");
  }

   const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="DashboardMenu">
      <div className="button-cont">
      <button className="assessment-button" onClick={handleAssessmentClick}>Assessments</button>
      <button onClick={handleClick}>Create New Cohort</button>
      <Dropdown/>
      <NewCohort showCohort={showCohort} onClose={() => setShowCohort(false)} />
      {showAssessment && <Assessments closeAssessment={setShowAssessment} />}
      </div>
    </div>
  );
};

export default DashboardMenu;
