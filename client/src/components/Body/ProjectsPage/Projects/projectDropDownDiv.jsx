import React, { useState, useEffect, useContext, useRef } from 'react';
import CohortContext from '../../../Context/CohortContext';

export function ProjectDropDown({ projects }) {
  const { cohort } = useContext(CohortContext);
  const [selectedProject, setSelectedProject] = useState(undefined);
  const [isOpen, setIsOpen] = useState(false);
  const PdropdownRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    setSelectedProject(undefined);
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
    setSelectedProject(e.project_name);
    console.log(e.project_name);
    setIsOpen(false);
  };

  return (
    <>
      <div
        className='dropdown-container project-dropdown'
        ref={PdropdownRef}
      >
        <div className='dropdown'>
          <button
            className='dropdown-header'
            onClick={toggleDropdown}
          >
            {selectedProject || `Select a Project`}
          </button>
          {isOpen && (
            <div className='dropdown-list'>
              {projects.map((item, key) => (
                <div
                  key={key}
                  onClick={() => handleItemClick(item)}
                >
                  {`${item.project_name}`}
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
