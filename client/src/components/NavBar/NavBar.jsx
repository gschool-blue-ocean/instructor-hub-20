import React from 'react';
import '../../styles/NavBar.css';
import GalvanizeLogo from '../../styles/svgs/galvanize.svg';
import GalvanizeTextLogo from '../../styles/svgs/galvanize-text-logo.svg';

const NavBar = () => {
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

      <p id='navbar-title'>Instructor Hub</p>

      <button>Dashboard</button>
      <button>Projects</button>
    </div>
  );
};

export default NavBar;
