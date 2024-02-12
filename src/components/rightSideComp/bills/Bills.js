import React, { useState } from "react";
import "./bills.css";
import { useSelector, useDispatch } from "react-redux";
import { addTransaction } from "../../redux/ReduxSlice";

function Bills() {
  const cats = useSelector((state) => state.info.cats);
  const balance = useSelector((state) => state.info.bal);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    for: "",
    cat: "",
    type: "",
    amount: "",
    date: "",
  });

  const changeValue = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (form.cat !== "" && form.type !== "") {
      dispatch(addTransaction(form));
      setForm({ for: "", cat: "", type: "", amount: "", date: "" });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className="bills_topDiv">
      <div className="bills_desk">
        <form onSubmit={(e) => submitForm(e)}>
          <h6 className="fw-bold text-danger">PAY / RECEIVE</h6>
          <p className="mb-1 mt-3 fw-semibold">Transaction For</p>
          <input
            type="text"
            placeholder="ex.Burger King"
            value={form.for}
            onChange={(e) => changeValue({ for: e.target.value })}
            required
          />
          <p className="mb-1 mt-3 fw-semibold">Category</p>
          <select
            value={form.cat}
            onChange={(e) => changeValue({ cat: e.target.value })}
            required
          >
            <option>Choose Category</option>
            {cats?.map((c, i) => (
              <option key={i} className="fw-semibold">
                {c.cat}
              </option>
            ))}
          </select>
          <p className="mb-1 mt-3 fw-semibold">Type</p>
          <select
            value={form.type}
            onChange={(e) => changeValue({ type: e.target.value })}
            required
          >
            <option>Choose Type</option>
            <option className="type_credit fw-semibold" selected>
              Credits
            </option>
            <option className="type_debit fw-semibold">Debits</option>
          </select>
          <p className="mb-1 mt-3 fw-semibold">Amount</p>
          <input
            type="number"
            min={0}
            value={form.amount}
            onChange={(e) => changeValue({ amount: e.target.value })}
            required
          />
          <p className="mb-1 mt-3 fw-semibold">Date</p>
          <input
            type="date"
            value={form.date}
            onChange={(e) => changeValue({ date: e.target.value })}
            required
          />
          <div className="py-3 fw-semibold bills_btn_container">
            <button type="submit" className="form_button fw-semibold">
              Make Transaction
            </button>
            <div className="bills_bal">Bal- Rs.{balance}</div>
          </div>
        </form>
      </div>
      <div className="bills_imgDiv">
        <img src="/images/bills_img.jpg" alt="img" />
      </div>
    </div>
  );
}

export default Bills;
