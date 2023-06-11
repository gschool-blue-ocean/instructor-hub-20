import React, { useState, useEffect, useContext, useRef } from "react";
import CohortContext from "../../../../Context/CohortContext";

export default function AssessmentDropDown({ assessments }) {
  const { cohort } = useContext(CohortContext);
  const [selectedAssessment, setSelectedAssessment] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const PdropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setSelectedAssessment(undefined);
  }, [cohort]);

  const handleDocumentClick = (event) => {
    // Check if the click event target is inside the dropdown menu or not
    if (PdropdownRef.current && !PdropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown menu
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e) => {
    setSelectedAssessment(e.assess_name);
    console.log(e.assess_name);
    setIsOpen(false);
  };

  return (
    <>
      <div className="dropdown-container project-dropdown" ref={PdropdownRef}>
        <div className="dropdown">
          <button className="dropdown-header" onClick={toggleDropdown}>
            {selectedAssessment || `Select an Assessment`}
          </button>
          {isOpen && (
            <div className="dropdown-list">
              {assessments.map((item, key) => (
                <div key={key} onClick={() => handleItemClick(item)}>
                  {`${item.assess_name}`}
                </div>
              ))}
              {/* {console.log(options)} */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
