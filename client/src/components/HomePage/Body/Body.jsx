import React from "react";
import SideMenu from "./SideMenu/SideMenu";
import Dashboard from "./Dashboard/Dashboard";
import styles from "./Body.module.css";
const Body = () => {
  return (
    <div className={styles["body"]}>
      <SideMenu />
      <Dashboard />
    </div>
  );
};

export default Body;
