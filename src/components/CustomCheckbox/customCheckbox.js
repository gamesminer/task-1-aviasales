import React from "react";

const CustomCheckbox = ({setCheck, countTransfer, checkedTransfer, label}) => {
  const handleClick = () => setCheck(state => {
    if (state.includes(countTransfer)) {
      state.splice(state.indexOf(countTransfer), 1);
    } else {
      state.push(countTransfer);
    }

    return [...state];
  });

  return (
    <div
      className="custom-checkbox"
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={checkedTransfer}
        readOnly
      />
      <span/>
      <p className="custom-checkbox__label">{label}</p>
    </div>
  )
};

export default CustomCheckbox;