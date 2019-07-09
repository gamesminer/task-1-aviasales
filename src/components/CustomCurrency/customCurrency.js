import React from "react";

const CustomCurrency = ({index, currency, value, setCurrency}) => {
  const handleChange = () => {
    localStorage.setItem('currency', value);
    setCurrency(value)
  };

  return (
    <button
      className={`currency-list__button currency-list__button_${index}${currency === value ? " currency-list__button_active" : ""}`}
      onClick={handleChange}
    >
      {value}
    </button>
  )
};

export default CustomCurrency