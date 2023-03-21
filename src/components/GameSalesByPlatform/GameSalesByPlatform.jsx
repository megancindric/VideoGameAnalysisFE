import React from "react";
import { Pie, PieChart, Tooltip, Legend, Cell } from "recharts";
import { chartColors } from "../../utils/ChartColors";

const GameSalesByPlatform = ({ gameSalesByPlatform, gameName }) => {
  var data = [];
  for (const [key, value] of Object.entries(gameSalesByPlatform)) {
    data.push({ name: key, value: value });
  }
  return (
    <div className="flex flex-row items-center justify-evenly p-6">
      <div>
        <div className="flex flex-col items-center justify-center border rounded-xl bg-violet-100 p-6 gap-6 drop-shadow-xl">
          <h3 className=" text-3xl my-3 font-semibold text-violet-800 drop-shadow-md">
            {gameName} Sales by Platform
          </h3>
          <ul className="list-disc p-3">
            {data.map((platform, index) => (
              <li
                className="text-2xl rounded-lg font-semibold text-violet-600 text-left p-1"
                key={index}
              >
                <b>{platform.name}:</b> ${platform.value} Million
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
