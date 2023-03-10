import React from "react";

const DropDownMenu = ({ values, setValue, defaultValue, selectLabel }) => {
  return (
    <div className="flex flex-col m-auto">
      <label
        for="dropdown"
        className="block text-lg mb-2 text-violet-800 font-semibold"
      >
        {selectLabel}
      </label>
      <select
        id="dropdown"
        value={defaultValue}
        onChange={(e) => setValue(e.target.value)}
        className="text-lg p-2.5 rounded-lg font-semibold text-violet-600"
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
