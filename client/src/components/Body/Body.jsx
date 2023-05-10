import React from 'react';
import '../../styles/Body.css';
import DashboardPage from './DashboardPage/DashboardPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';
import GalvLogo from '../../styles/svgs/galvanize.svg';

const Body = () => {
  return (
    <div id='Body'>
      <DashboardPage></DashboardPage>
      <ProjectsPage></ProjectsPage>
      <img
        id='galvlogo'
        src={GalvLogo}
        alt='galvanize logo'
      />
    </div>
  );
};

export default Body;
