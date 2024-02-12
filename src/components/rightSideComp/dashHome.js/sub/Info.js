import React from "react";
import { useSelector } from "react-redux";

function Info() {
  const cats = useSelector((state) => state.info.cats);
  return (
    <div>
      <div className="info_grid_container">
        {cats?.map(
          (c, i) =>
            i <= 2 && (
              <div key={i} className="info_grid fw-bold">
                <h6>{c.cat}</h6>
                <p>Rs. {c.spend}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Info;
