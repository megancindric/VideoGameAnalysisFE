import React from "react";

const DropDownMenu = ({ values, setValue, defaultValue }) => {
  return (
    <div>
      <label>
        <select value={defaultValue} onChange={(e) => setValue(e.target.value)}>
          {values.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default DropDownMenu;
