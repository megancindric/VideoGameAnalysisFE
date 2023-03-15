import React from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";
import { chartColors } from "../../utils/ChartColors";

const GameSalesByPlatform = ({ gameSalesByPlatform }) => {
  var data = [];
  for (const [key, value] of Object.entries(gameSalesByPlatform)) {
    data.push({ name: key, value: value });
  }
  return (
    <div className="flex flex-row-reverse p-8">
      <div>
        <div className="flex items-center justify-center border rounded-xl border-violet-600 bg-violet-50 p-8  ">
          <ul className="list-disc p-2.5">
            {data.map((platform, index) => (
              <li
                className="text-lg rounded-lg font-semibold text-violet-600"
                key={index}
              >
                {platform.name}: ${platform.value} Million
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" fill="#1780a1">
            {data.map((platform, index) => (
              <Cell
                key={`cell-${index}`}
                fill={chartColors[index % chartColors.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default GameSalesByPlatform;
