import React from "react";
import Dashboard from "./Dashboard";
import "./styles.css";

function DashboardHOC() {
  return (
      <div className="dashboard-body">
        <section className="dashboard">
          <Dashboard />
        </section>
      </div>
  );
}

export default DashboardHOC;