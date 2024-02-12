import React from "react";
import HistoryTemp from "./HistoryTemp";
import { useSelector } from "react-redux";

function History() {
  const trans = useSelector((state) => state.info.trans);
  return (
    <div className="history_topDiv">
      <div className="history_titleDiv mb-3">
        <h6 className="fw-bold">Your Transaction History</h6>
      </div>
      <div>
        {trans?.map((t, i) => (
          <HistoryTemp key={i} data={t} />
        ))}
      </div>
    </div>
  );
}

export default History;
