import React from "react";
import "./leftSide.css";
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <div className="p-2 leftSide_topDiv">
      <div className="leftSide_userDiv mb-3">
        <img src="/images/user.jpg" alt="img" />
        <h6>John Doe</h6>
      </div>
      <h6 className="linkDiv fw-bold border-bottom border-dark">SECTIONS</h6>
      <Link to="/">
        <div className="linkDiv py-1 fw-semibold">Dashboard</div>
      </Link>
      <Link to="bills">
        <div className="linkDiv py-1 fw-semibold">Bills and Payments</div>
      </Link>
      <Link to="expenses">
        <div className="linkDiv py-1 fw-semibold">Expenses</div>
      </Link>
      <Link to="stats">
        <div className="linkDiv py-1 fw-semibold">My Stats</div>
      </Link>
    </div>
  );
}

export default LeftSide;
