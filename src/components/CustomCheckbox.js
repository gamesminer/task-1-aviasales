import React from "react";

const CustomCheckbox = ({setCheck, countTransfer, checkedTransfer, label}) => {
  let handleClick = () => setCheck(state => {
    if (state.includes('all')) {
      state.splice(state.indexOf('all'), 1)
    }

    if (state.includes(countTransfer)) {
      state.splice(state.indexOf(countTransfer), 1);
    } else {
      state.push(countTransfer);
    }

    if (state.length === 0 || state.length === 4) {
      return ['all'];
    }
    return [...state];
  });

  if (countTransfer === 'all') {
    handleClick = () => setCheck( () => (['all']) )
  }

  return (
    <div
      className="number-of-transfers__list__element"
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={checkedTransfer}
        readOnly
      />
      <span/>
      <p className="number-of-transfers__list__label">{label}</p>
    </div>
  )
};

export default CustomCheckbox;