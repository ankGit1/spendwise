import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navTop">
      <h4 className="m-0">SPENDWISE</h4>
      <div className="navbar_links">
        <Link to="transactions" className="fw-semibold">
          TRANSACTIONS DETAILS
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
