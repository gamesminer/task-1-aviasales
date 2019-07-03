import React from "react";

const CustomCheckbox = (props) => {
  let handleClick = () => props['setCheck'](state => {
    if (state.includes('all')) {
      state.splice(state.indexOf('all'), 1)
    }

    if (state.includes(props['countTransfer'])) {
      state.splice(state.indexOf(props['countTransfer']), 1);
    } else {
      state.push(props['countTransfer'])
    }

    if (state.length === 0) {
      return ['all'];
    }
    return [...state];
  });

  if (props['countTransfer'] === 'all') {
    handleClick = () => props['setCheck']( () => (['all']) )
  }

  return (
    <div
      className="number-of-transfers__list__element"
      onClick={handleClick}
    >
      <input
        type="checkbox"
        checked={props['checkedTransfer']}
        readOnly
      />
      <span/>
      <p className="number-of-transfers__list__label">{props['label']}</p>
    </div>
  )
};

export default CustomCheckbox;