import React, { useContext, useEffect } from 'react';
import StudentsPage from '../SideMenu/Options/StudentsPage/StudentsPage';
import ProjectsPage from '../SideMenu/Options/ProjectsPage/ProjectsPage';
import AssessmentsPage from '../SideMenu/Options/AssessmentsPage/AssessmentsPage';
import MainPage from '../SideMenu/Options/MainPage/MainPage';
import AssessmentCard from '../SideMenu/Options/AssessmentsPage/AssessmentsTable/AssessmentCard/AssessmentCard';
import styles from './Dashboard.module.css';
import CohortContext from '../../../Context/CohortContext';

const Dashboard = () => {
  const { bodyDisplay, setBodyDisplay } = useContext(CohortContext);

  console.log(bodyDisplay)

  useEffect(() => {
    if (!bodyDisplay) {
      setBodyDisplay('main');
    }
  }, []);

  return (
    <div className={styles['dashboard-container']}>
      <div className={styles['dashboard-menu']}>
        {bodyDisplay === 'main' ? <MainPage /> : null}
        {bodyDisplay === 'project' ? <ProjectsPage /> : null}
        {bodyDisplay === 'student' ? <StudentsPage /> : null}
        {bodyDisplay === 'assessment' ? <AssessmentsPage /> : null}
        {bodyDisplay === 'assessmentCard' ? <AssessmentCard /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
