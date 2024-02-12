import { createSlice } from "@reduxjs/toolkit";
import { categories, transactions } from "../data/InitialData";

export const reduxSlice = createSlice({
  name: "info",
  initialState: {
    cats: [],
    trans: [],
    bal: 0,
  },
  reducers: {
    createLocalStorage: (state, action) => {
      let checkCats = localStorage.getItem("categories");
      let checkTrans = localStorage.getItem("transactions");
      let checkBal = localStorage.getItem("balance");

      let setCats = checkCats
        ? (state.cats = JSON.parse(checkCats))
        : (state.cats = categories);
      let setTrans = checkTrans
        ? (state.trans = JSON.parse(checkTrans))
        : (state.trans = transactions);
      let setBal = checkBal ? (state.bal = checkBal) : (state.bal = 11700);

      !checkCats &&
        localStorage.setItem("categories", JSON.stringify(categories));
      !checkTrans &&
        localStorage.setItem("transactions", JSON.stringify(transactions));
      !checkBal && localStorage.setItem("balance", 11700);
    },

    addCategory: (state, action) => {
      state.cats.push(action.payload);
      const getCatStorage = JSON.parse(localStorage.getItem("categories"));
      getCatStorage.push(action.payload);
      localStorage.setItem("categories", JSON.stringify(getCatStorage));
    },

    editCat: (state, action) => {
      state.cats[action.payload.index] = action.payload.cat;
      localStorage.setItem("categories", JSON.stringify(state.cats));
    },

    deleteCat: (state, action) => {
      state.cats = state.cats.filter((cat, i) => i !== action.payload);
      localStorage.setItem("categories", JSON.stringify(state.cats));
    },

    addTransaction: (state, action) => {
      if (action.payload.type === "Debits") {
        let balance = Number(state.bal) - Number(action.payload.amount);
        if (balance < 0) {
          alert(
            `Warning: Insufficient balance to complete this transaction \nYour Balance: Rs.${state.bal}`
          );
        } else {
          state.bal = balance;
          localStorage.setItem("balance", balance);
          let catIndex = state.cats.findIndex(
            (c) => c.cat == action.payload.cat
          );
          state.cats = state.cats.map((cat, index) => {
            if (index === catIndex) {
              return {
                ...cat,
                spend: String(
                  Number(cat.spend) + Number(action.payload.amount)
                ),
              };
            }
            return cat;
          });
          localStorage.setItem("categories", JSON.stringify(state.cats));
        }
      }

      if (action.payload.type === "Credits") {
        state.bal = Number(state.bal) + Number(action.payload.amount);
        localStorage.setItem("balance", state.bal);
      }
      state.trans.push(action.payload);
      const getTransStorage = JSON.parse(localStorage.getItem("transactions"));
      getTransStorage.push(action.payload);
      localStorage.setItem("transactions", JSON.stringify(getTransStorage));
    },
  },
});

export const {
  createLocalStorage,
  addCategory,
  editCat,
  deleteCat,
  addTransaction,
} = reduxSlice.actions;

export default reduxSlice.reducer;
