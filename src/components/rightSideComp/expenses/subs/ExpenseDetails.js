import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

function ExpenseDetails() {
  const cats = useSelector((state) => state.info.cats);
  const trans = useSelector((state) => state.info.trans);
  const [transactions, setTransactions] = useState([]);
  const [compare, setCompare] = useState({
    target: "",
    spend: "",
  });

  const fetchData = (e) => {
    let eValue = e.target.value;
    if (eValue !== "" && eValue !== "Select..") {
      const filterData = trans.filter((t) => t.cat === eValue);
      const findCat = cats.find((c) => c.cat === eValue);
      setCompare({
        target: findCat.target,
        spend: findCat.spend,
      });
      setTransactions(filterData);
    } else {
      alert("Please select a Category");
    }
  };
  return (
    <div>
      <div className="my-3">
        <label>Search by Category: </label>
        <select className="mx-2" onChange={(e) => fetchData(e)}>
          <option>Select..</option>
          {cats?.map((c, i) => (
            <option key={i}>{c.cat}</option>
          ))}
        </select>
      </div>
      <div className="exDetails_target_div">
        <p>
          <b>Target</b> : Rs.
          <span className="text-success fw-semibold">{compare.target}</span>
        </p>
        <p>
          <b>Spend</b> : Rs.
          <span className="text-danger fw-semibold">{compare.spend}</span>
        </p>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>For</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length > 0 ? (
              transactions.map((t, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{t.for}</td>
                  <td>{t.cat}</td>
                  <td>{t.amount}</td>
                  <td>{t.date}</td>
                  <td
                    className="fw-bold"
                    style={{ color: t.type === "Debits" ? "red" : "green" }}
                  >
                    {t.type}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ExpenseDetails;
