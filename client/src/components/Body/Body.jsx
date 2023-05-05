import React from 'react';
import '../../styles/Body.css';
import DashboardPage from './DashboardPage/DashboardPage';
import ProjectsPage from './ProjectsPage/ProjectsPage';

const Body = () => {
  return (
    <div id='Body'>
      <DashboardPage></DashboardPage>
      <ProjectsPage></ProjectsPage>
    </div>
  );
};

export default Body;
