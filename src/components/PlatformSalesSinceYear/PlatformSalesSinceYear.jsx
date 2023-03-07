import React from "react";
import { BarChart, Bar, XAxis } from "recharts";

const PlatformSalesSinceYear = ({ platformSalesSinceYear }) => {
  var data = [];
  for (const [key, value] of Object.entries(platformSalesSinceYear)) {
    data.push({ name: key, amt: value });
  }
  console.log(data);
  return (
    <div>
      <h3>Game sales by platform since 2011</h3>
      <BarChart width={800} height={300} data={data}>
        <Bar dataKey="amt" fill="#1780a1" />
        <XAxis dataKey="name" />
      </BarChart>
    </div>
  );
};

export default PlatformSalesSinceYear;
