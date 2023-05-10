import React, { useState, useEffect, useContext } from 'react';

import '../../styles/NavBar.css';
import GalvanizeLogo from '../../styles/svgs/galvanize.svg';
import GalvanizeTextLogo from '../../styles/svgs/galvanize-text-logo.svg';
import CohortContext from '../Context/CohortContext';

const NavBar = () => {
  const { cohort, setCohort } = useContext(CohortContext);
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/cohorts`);
      const data = await response.json();
      setCohorts(data);
      // console.log(cohorts);
    })();
    return () => {};
  }, []);

  //
  return (
    <div id='navbar'>
      <img
        id='galvanize-logo'
        src={GalvanizeLogo}
        alt='galvanize logo'
      />
      <img
        id='galvanize-text-logo'
        src={GalvanizeTextLogo}
        alt='galvanize text logo'
      />
      <p
        id='navbar-title'
        data-testid='title'
      >
        Instructor Hub
      </p>
      <button>Dashboard</button>
      <button>Projects</button>

      <select onChange={(e) => setCohort(e.target.value)}>
        <option>Select Cohort</option>
        {cohorts.map((coh) => (
          <option value={coh.cohort_number}>{coh.cohort_number}</option>
        ))}
      </select>
    </div>
  );
};

export default NavBar;
