import React from "react";

const CustomTooltip = ({ payload, label, active }) => {
  console.log(payload);
  return active ? (
    <div className="custom-tooltip p-3 bg-[#7400b8] bg-opacity-50 rounded-xl text-center border-none">
      <p className="label text-lg font-bold text-white">{`${
        label ? label : payload[0].name
      }`}</p>
      <p className="intro text-lg font-semibold text-white">{`$${payload[0].value} Million`}</p>
    </div>
  ) : null;
};

export default CustomTooltip;
