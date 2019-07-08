import React from 'react';
import CustomCurrency from "../CustomCurrency/customCurrency";

const CurrencyBlock = ({currency, setCurrency}) => {
  return (
    <div className="currency">
      <p className="App-aside__title">Валюта</p>
      <div className="currency-list">
        <CustomCurrency value="rub" index="first" currency={currency} setCurrency={setCurrency}/>
        <CustomCurrency value="usd" index="second" currency={currency} setCurrency={setCurrency}/>
        <CustomCurrency value="eur" index="third" currency={currency} setCurrency={setCurrency}/>
      </div>
    </div>
  )
};

export default CurrencyBlock;