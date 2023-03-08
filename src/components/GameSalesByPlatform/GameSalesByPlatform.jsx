import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const GameSalesByPlatform = ({ gameName, gameSalesByPlatform }) => {
  var data = [];
  for (const [key, value] of Object.entries(gameSalesByPlatform)) {
    data.push({ name: key, value: value });
  }
  console.log(data);
  return (
    <div>
      <h3>{gameName} Sales by Platform</h3>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey="value" fill="#1780a1" />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default GameSalesByPlatform;
