export const compare = (a, b) => {
  if ( a['price'] < b['price'] ){
    return -1;
  }
  if ( a['price'] > b['price'] ){
    return 1;
  }
  return 0;
};

export const checkCurrency = (currency, price) => {
  switch(currency) {
    case 'usd':
      return ` ${Math.round(price * 10 / 63.29) / 10}$`;
    case 'eur':
      return ` ${Math.round(price * 10 / 71.42) / 10}€`;
    default:
      return ` ${Math.round(price * 100) / 100}₽`;
  }
};