import React from "react";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./layout.css";
import LeftSide from "../leftSideComp/LeftSide";

function Layout() {
  return (
    <div>
      <Navbar />
      <div className="layout_dashboardDiv">
        <div className="left_side">
          <LeftSide />
        </div>
        <div className="right_side">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
