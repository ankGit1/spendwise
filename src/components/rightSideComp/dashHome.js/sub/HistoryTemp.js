import React from "react";

function HistoryTemp({ data }) {
  const { date, amount } = data;
  return (
    <div className="historyTemp_topDiv fw-semibold mb-2">
      <div className="historyTemp_dateDiv">
        <h6 className="m-0">{data.for}</h6>
        <p className="m-0">
          <small>{date}</small>
        </p>
      </div>
      <p>Rs. {amount}</p>
    </div>
  );
}

export default HistoryTemp;
