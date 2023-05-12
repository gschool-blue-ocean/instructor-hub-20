import React, { useState, useEffect, useContext } from 'react';

import '../../styles/NavBar.css';
import GalvanizeLogo from '../../styles/svgs/galvanize.svg';
import GalvanizeTextLogo from '../../styles/svgs/galvanize-text-logo.svg';
import CohortContext from '../Context/CohortContext';
import Dropdown from './Dropdown';

const NavBar = () => {
  const { cohort, setCohort } = useContext(CohortContext);
  const [cohorts, setCohorts] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(`http://localhost:8000/cohorts`);
  //     const data = await response.json();
  //     setCohorts(data);
  //     console.log(`NavBar API call for select cohorts dropdown: `, data);
  //   })();
  //   return () => {};
  // }, []);
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
        · Instructor Hub
      </p>
      |<button>Dashboard</button>|<button>Projects</button>|
      <Dropdown />
    </div>
  );
};

export default NavBar;
