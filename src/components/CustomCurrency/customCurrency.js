import React from "react";

const CustomCurrency = ({index, currency, value, setCurrency}) => {
  return (
    <button
      className={`currency-list__button currency-list__button_${index}${currency === value ? " currency-list__button_active" : ""}`}
      onClick={() => setCurrency(value)}
    >
      {value}
    </button>
  )
};

export default CustomCurrency