import React, {useState, useEffect} from 'react';

import { Store } from '../../store/Store';

import {fetchData} from '../../store/actions/storage';

import CurrencyBlock from '../../blocks/CurrencyBlock/currencyBlock';
import NumberOfTransfersBlock from "../../blocks/NumberOfTransfersBlock/numberOfTransfersBlock";

import TicketElement from '../../components/TicketElement/ticketElement';

const Storage = ({stopLoading}) => {
  const { state, dispatch } = React.useContext(Store);
  const [checkedTransfer, setCheck] = useState([]);
  const [currency, setCurrency] = useState(localStorage['currency']);

  useEffect(() => {
    if (!localStorage['currency']) {
      localStorage.setItem('currency', 'rub');
      setCurrency(localStorage['currency'])
    }
    state.storageData.length === 0 && fetchData(dispatch, stopLoading);
    checkedTransfer.length === 4 && setTimeout(() => setCheck(() => []), 200);
  }, [state.storageData.length, checkedTransfer.length, dispatch, stopLoading]);

  return (
    <section className="App-section">
      <aside className="aside">
        <div className="App-aside">
          <CurrencyBlock currency={currency} setCurrency={setCurrency} />
          <NumberOfTransfersBlock setCheck={setCheck} checkedTransfer={checkedTransfer} />
        </div>
      </aside>

      <main className="main">
        <div className="App-main">
          {state.storageData.map((item, index) => {
            if (checkedTransfer.length === 0 || checkedTransfer.includes(item['stops'])) {
              return <TicketElement item={item} currency={currency} key={index}/>
            }
            return null
          })}
        </div>
      </main>
    </section>
  );
};

export default Storage;
