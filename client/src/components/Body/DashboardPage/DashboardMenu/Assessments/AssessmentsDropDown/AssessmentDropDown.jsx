import React, { useState, useEffect, useRef } from "react";
import CohortContext from "../../../../../Context/CohortContext";

export function AssessmentDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const AdropdownRef = useRef(null);
  const [assessments, setAssessments] = useState([]);
  const [currentAssessment, setCurrentAssessment] = useState(null);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = () => {
    fetch("http://localhost:8000/assessments")
      .then((response) => response.json())
      .then((data) => setAssessments(data));
  };

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("click", handleDocumentClick);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  //   useEffect(() => {
  //     setAssessment(undefined);
  //   }, [cohort]);

  const handleDocumentClick = (event) => {
    // Check if the click event target is inside the dropdown menu or not
    if (AdropdownRef.current && !AdropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown menu
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e) => {
    setCurrentAssessment(e.assess_name);
    // console.log(e.project_name);
    setIsOpen(false);
  };

  return (
    <>
      <div className="dropdown-container project-dropdown" ref={AdropdownRef}>
        <div className="dropdown">
          <button className="dropdown-header" onClick={toggleDropdown}>
            {currentAssessment || `Select assessment`}
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

export default AssessmentDropDown;
