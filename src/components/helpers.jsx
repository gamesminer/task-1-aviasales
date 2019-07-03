import React from 'react'

export const CustomCurrency = (props) => {
  return (
    <button
      className={`currency__list__button currency__list__button_${props['index']}${props['currency'] === props['value'] ? " currency__list__button_active" : ""}`}
      onClick={() => props['setCurrency'](props['value'])}
    >
      {props['value']}
    </button>
  )
};

export const compare = (a, b) => {
  if ( a['price'] < b['price'] ){
    return -1;
  }
  if ( a['price'] > b['price'] ){
    return 1;
  }
  return 0;
};