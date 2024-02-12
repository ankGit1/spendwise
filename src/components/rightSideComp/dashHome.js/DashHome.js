import React from "react";
import "./dashHome.css";
import Info from "./sub/Info";
import DashHomeChart from "../../charts/dashHomeChart/DashHomeChart";
import History from "./sub/History";

function DashHome() {
  return (
    <div className="dashHome_topDiv">
      <div className="dashHome_infoDiv">
        <Info />
        <DashHomeChart />
      </div>
      <div className="dashHome_historyDiv">
        <History />
      </div>
    </div>
  );
}

export default DashHome;
