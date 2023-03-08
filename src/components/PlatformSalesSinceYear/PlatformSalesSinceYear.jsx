import React from "react";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

const PlatformSalesSinceYear = ({ platformSalesSinceYear, selectedYear }) => {
  var data = [];
  for (const [key, value] of Object.entries(platformSalesSinceYear)) {
    data.push({ name: key, amt: value });
  }
  console.log(data);
  return (
    <div>
      <h3>Global Game sales by platform since {selectedYear}</h3>
      <BarChart width={800} height={300} data={data}>
        <Bar dataKey="amt" fill="#1780a1" />
        <Tooltip />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};

export default PlatformSalesSinceYear;
