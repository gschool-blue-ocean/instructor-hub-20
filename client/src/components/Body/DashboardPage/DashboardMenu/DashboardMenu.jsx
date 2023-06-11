import React, { useState, useContext } from "react";
import NewCohort from "./NewCohort/NewCohort.jsx";
import CohortContext from "../../../Context/CohortContext.jsx";
import "./DashboardMenu.css";
import Dropdown from "../../../NavBar/Dropdown/Dropdown.jsx";

const DashboardMenu = () => {
  const [showCohort, setShowCohort] = useState(false);
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
      <button onClick={handleClick}>Create New Cohort</button>
      <Dropdown/>
      <NewCohort showCohort={showCohort} onClose={() => setShowCohort(false)} />
      </div>
    </div>
  );
};

export default DashboardMenu;
