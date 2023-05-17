import React, { useContext } from "react";
import "../../styles/Body.css";
import DashboardPage from "./DashboardPage/DashboardPage";
import ProjectsPage from "./ProjectsPage/ProjectsPage";
import GalvLogo from "../../styles/svgs/galvanize.svg";
import CohortContext from "../Context/CohortContext";

const Body = () => {
  const { bodyDisplay } = useContext(CohortContext);
  return (
    <div id="Body">
      {bodyDisplay === "body" ? <DashboardPage></DashboardPage> : null}
      {bodyDisplay === "project" ? <ProjectsPage></ProjectsPage> : null}
      <img id="galvlogo" src={GalvLogo} alt="galvanize logo" />
    </div>
  );
};

export default Body;