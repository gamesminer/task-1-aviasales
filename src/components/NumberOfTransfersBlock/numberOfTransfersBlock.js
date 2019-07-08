import React from 'react';
import CustomCheckbox from "../CustomCheckbox/customCheckbox";

const NumberOfTransfersBlock = ({setCheck, checkedTransfer}) => {
  return (
    <div className="number-of-transfers">
      <p className="App-aside__title">Количество пересадок</p>
      <div className="number-of-transfers__list">
        <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(0)} countTransfer={0} label="Без пересадок"/>
        <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(1)} countTransfer={1} label="1 пересадка"/>
        <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(2)} countTransfer={2} label="2 пересадки"/>
        <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(3)} countTransfer={3} label="3 пересадки"/>
      </div>
    </div>
  )
};

export default NumberOfTransfersBlock;