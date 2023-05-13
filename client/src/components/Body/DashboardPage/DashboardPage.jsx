import React from 'react';
import '../../../styles/DashboardPage.css';
import DashboardMenu from './DashboardMenu/DashboardMenu';
import Students from './Students/Students';

const DashboardPage = () => {
  return (
    <div id='DashboardPage'>
      <DashboardMenu></DashboardMenu>
      <div className='dash-students-container'>
        <Students></Students>
      </div>
      {/* <p>Dashboard Page</p> */}
    </div>
  );
};

export default DashboardPage;
