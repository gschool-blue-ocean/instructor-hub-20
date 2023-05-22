import React, { useState, useEffect, useContext, useRef } from 'react';
import CohortContext from '../Context/CohortContext';

function Dropdown() {
  const { cohort, setCohort } = useContext(CohortContext);
  const [cohorts, setCohorts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Make your API call here and update the options state when it's done
    fetch('https://blueocean-instructorhub.onrender.com/cohorts')
      .then((response) => response.json())
      .then((data) => setCohorts(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener('click', handleDocumentClick);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDocumentClick = (event) => {
    // Check if the click event target is inside the dropdown menu or not
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown menu
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setCohort(item.cohort_number);
    setIsOpen(false);
  };

  return (
    <div
      className='dropdown-container'
      ref={dropdownRef}
    >
      <div className='dropdown'>
        <button
          className='dropdown-header'
          onClick={toggleDropdown}
        >
          {`Selected Cohort: ${cohort}` || 'Select a Cohort'}
        </button>
        {isOpen && cohorts.length > 0 && (
          <div className='dropdown-list'>
            {cohorts.map((item) => (
              <div
                key={item.cohort_number}
                onClick={() => handleItemClick(item)}
              >
                {`MCSP - ${item.cohort_number}`}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dropdown;
