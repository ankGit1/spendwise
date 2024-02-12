import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Recharts = () => {
  const cats = useSelector((state) => state.info.cats);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={cats}
        // margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="task" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="target" fill="#8884d8" barSize={30} name="Total Money" />
        <Bar
          dataKey="spend"
          fill="#82ca9d"
          barSize={30}
          name="Actual Spending"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Recharts;
