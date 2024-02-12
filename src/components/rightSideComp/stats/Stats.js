import React, { useState } from "react";
import "./stats.css";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, editCat, deleteCat } from "../../redux/ReduxSlice";

function Stats() {
  const storeCats = useSelector((state) => state.info.cats);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    cat: "",
    target: "",
    spend: "0",
  });
  const [edit, setEdit] = useState({
    cat: "",
    target: "",
    spend: "",
  });
  const [pop, setPop] = useState(false);
  // const [item, setItem] = useState({});
  const [index, setIndex] = useState();

  const changing = (data) => {
    return setForm((prev) => {
      return { ...prev, ...data };
    });
  };

  const changeValue = (data) => {
    return setEdit((prev) => {
      return { ...prev, ...data };
    });
  };

  const showItem = (c, i) => {
    setEdit({ cat: c.cat, target: c.target, spend: c.spend || "0" });
    setIndex(i);
    setPop(true);
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(addCategory(form));
    setForm({ cat: "", target: "" });
  };

  const editForm = () => {
    dispatch(editCat({ cat: edit, index: index }));
    setPop(false);
  };

  const cancelEdit = () => {
    setPop(false);
    setEdit({ cat: "", target: "", spend: "" });
    setIndex(null);
  };

  const deleteCategory = (i) => {
    dispatch(deleteCat(i));
  };

  return (
    <div className="stats_topDiv">
      <h6 className="fw-bold mb-3 text-danger">MY STATS</h6>
      <p className="fw-semibold">Categories</p>
      <div>
        {storeCats.length > 0 &&
          storeCats.map((c, i) => (
            <div key={i} className="stats_categories my-2">
              <p className="fw-semibold mb-0 stats_categoryP">{c.cat}</p>
              <p className="mb-0">
                Target: <span className="fw-semibold">{c.target}</span>
              </p>
              <div className="stats_edit_deleteBtn">
                <button onClick={() => showItem(c, i)}>Edit</button>
                <button onClick={() => deleteCategory(i)}>Delete</button>
              </div>
            </div>
          ))}
      </div>
      <div>
        <form className="stats_form my-3" onSubmit={(e) => submitForm(e)}>
          <div>
            <label className="mx-2 fw-semibold">Category:</label>
            <input
              type="text"
              placeholder="ex.Food"
              value={form.cat}
              onChange={(e) => changing({ cat: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="mx-2 fw-semibold">Target:</label>
            <input
              type="number"
              min={0}
              placeholder="5000"
              value={form.target}
              onChange={(e) => changing({ target: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="fw-semibold my-2 addCatBtn">
            Add Category
          </button>
        </form>
      </div>

      {pop && (
        <div className="stats_popup">
          <label className="mb-1 mt-3 fw-semibold">Category:</label>
          <input
            type="text"
            value={edit.cat}
            onChange={(e) => changeValue({ cat: e.target.value })}
          />
          <label className="mb-1 mt-3 fw-semibold">Target:</label>
          <input
            className="mb-3"
            type="number"
            min={0}
            value={edit.target}
            onChange={(e) => changeValue({ target: e.target.value })}
          />
          <div className="popup_btnDiv">
            <button className="btn btn-primary" onClick={() => editForm()}>
              Submit
            </button>
            <button className="btn btn-warning" onClick={cancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Stats;
