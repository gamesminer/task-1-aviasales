import React, {useState, useEffect} from 'react';

import { Store } from '../../store/Store';

import TicketElement from '../../components/TicketElement/ticketElement';
import CurrencyBlock from '../../components/CurrencyBlock/currencyBlock';
import NumberOfTransfersBlock from "../../components/NumberOfTransfersBlock/numberOfTransfersBlock";
import Loader from '../../components/Loader/loader';
import Logo from '../../components/Logo/logo';

import {fetchData} from '../../store/actions/storage';

const Storage = () => {
  const { state, dispatch } = React.useContext(Store);

  const [checkedTransfer, setCheck] = useState([]);
  const [currency, setCurrency] = useState("rub");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    state.storageData.length === 0 && fetchData(dispatch, () => setLoading(false));
    checkedTransfer.length === 4 && setTimeout(() => setCheck(() => []), 200);
  });

  return (
    <>
      <Loader loading={loading}/>
      <div className="App">

        <header className="App-header">
          <Logo/>
        </header>

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
      </div>
    </>
  );
};

export default Storage;
