import React from "react";
import "./transaction.css";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function Transaction() {
  const trans = useSelector((state) => state.info.trans);
  return (
    <div className="expenses_topDiv">
      <h6 className="fw-bold mb-3 text-danger">ALL TRANSACTIONS</h6>
      <div className="table_div">
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
            {trans.length > 0 ? (
              trans.map((t, i) => (
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

export default Transaction;
