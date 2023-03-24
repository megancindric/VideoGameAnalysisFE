import React from "react";

const DropDownMenu = ({ values, setValue, defaultValue, selectLabel }) => {
  return (
    <div className="flex flex-col w-48 mx-auto">
      <label
        htmlFor="dropdown"
        className="block text-4xl mb-2 text-[#7400b8] font-semibold"
      >
        {selectLabel}
      </label>
      <select
        id="dropdown"
        value={defaultValue}
        onChange={(e) => setValue(e.target.value)}
        className="text-lg p-2.5 rounded-lg font-semibold text-[#6930c3] bg-white shadow-xl"
      >
        {values.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
