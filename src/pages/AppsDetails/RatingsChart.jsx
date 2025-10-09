import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  return (
    <div>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={ratings}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <XAxis type="number" axisLine={false} tickLine={false}></XAxis>
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            width={60}
          ></YAxis>
          <Tooltip></Tooltip>
          <Bar dataKey="count" fill="#FF8811" barSize={20}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
