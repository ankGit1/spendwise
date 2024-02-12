import React from "react";
import "./expenses.css";
import ExpenseDetails from "./subs/ExpenseDetails";
import DashHomeChart from "../../charts/dashHomeChart/DashHomeChart";

function Expenses() {
  return (
    <div className="expenses_topDiv">
      <h6 className="fw-bold mb-3 text-danger">MY EXPENSES</h6>
      <DashHomeChart className="bg-secondory" />
      <div className="table_div">
        <ExpenseDetails />
      </div>
    </div>
  );
}

export default Expenses;
