import React from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";
import { chartColors } from "../../utils/ChartColors";

const GameSalesByPlatform = ({ gameName, gameSalesByPlatform }) => {
  var data = [];
  for (const [key, value] of Object.entries(gameSalesByPlatform)) {
    data.push({ name: key, value: value });
  }
  return (
    <div className="flex">
      <div>
        <h3 className=" text-2xl my-3 font-semibold text-purple-800">
          {gameName} Sales by Platform
        </h3>
        <div className="flex items-center justify-center border rounded-xl border-violet-600 bg-violet-50 w-1/2 p-2.5">
          <ul className="list-disc">
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
