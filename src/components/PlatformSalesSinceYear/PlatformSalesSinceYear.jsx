import React from "react";
import { BarChart, Bar, XAxis, Tooltip, Cell } from "recharts";
import { chartColors } from "../../utils/ChartColors";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import LoadingSpinner from "../../utils/LoadingSpinner";

const PlatformSalesSinceYear = ({
  platformSalesSinceYear,
  selectedYear,
  setSelectedYear,
  allYears,
  isLoading,
}) => {
  var data = [];
  for (const [key, value] of Object.entries(platformSalesSinceYear)) {
    data.push({ name: key, amt: value });
  }
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-5xl text-violet-800 font-semibold py-16 ">
        Global Platform Game Sales since {selectedYear}
      </h3>
      <div className="flex flex-row ">
        <div className="flex w-[800px] h-[300px] min-h-[300px] min-w-[800px]">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
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
          )}
        </div>
        <div className="flex">
          <DropDownMenu
            values={allYears}
            setValue={setSelectedYear}
            defaultValue={selectedYear}
            selectLabel="Select Year:"
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformSalesSinceYear;
