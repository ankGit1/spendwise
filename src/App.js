import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import DashHome from "./components/rightSideComp/dashHome.js/DashHome";
import Expenses from "./components/rightSideComp/expenses/Expenses";
import Bills from "./components/rightSideComp/bills/Bills";
import Transaction from "./components/rightSideComp/transactions/Transaction";
import Stats from "./components/rightSideComp/stats/Stats";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createLocalStorage } from "./components/redux/ReduxSlice";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<DashHome />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/stats" element={<Stats />} />
      </Route>
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(createLocalStorage());
  }, []);
  return <RouterProvider router={router} className="App" />;
}

export default App;
