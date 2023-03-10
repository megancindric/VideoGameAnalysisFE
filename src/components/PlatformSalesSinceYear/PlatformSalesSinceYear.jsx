import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";
import { chartColors } from "../../utils/ChartColors";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const PlatformSalesSinceYear = ({
  platformSalesSinceYear,
  selectedYear,
  setSelectedYear,
  allYears,
}) => {
  var data = [];
  for (const [key, value] of Object.entries(platformSalesSinceYear)) {
    data.push({ name: key, amt: value });
  }
  return (
    <div>
      <div className="flex flex-row">
        <h3 className="text-3xl text-violet-800 font-semibold">
          Global Game sales by platform since {selectedYear}
        </h3>

        <DropDownMenu
          values={allYears}
          setValue={setSelectedYear}
          defaultValue={selectedYear}
          selectLabel="Select Year:"
        />
      </div>
      <BarChart width={800} height={300} data={data}>
        <Bar dataKey="amt">
          {data.map((platform, index) => (
            <Cell
              key={`cell-${index}`}
              fill={chartColors[index % chartColors.length]}
            />
          ))}
        </Bar>
        <Tooltip />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};

export default PlatformSalesSinceYear;
