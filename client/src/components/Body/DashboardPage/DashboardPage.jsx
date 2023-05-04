import React from 'react';
import '../../../styles/DashboardPage.css';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import Students from './Students/Students';

const DashboardPage = () => {
  return (
    <div id='DashboardPage'>
      Dashboarrd Page
      <DashboardMenu></DashboardMenu>
      <Students></Students>
    </div>
  );
};

export default DashboardPage;
