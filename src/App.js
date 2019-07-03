import React, {useState} from 'react';

import TicketElement from './components/TicketElement';
import CustomCheckbox from './components/CustomCheckbox';
import CustomCurrency from './components/CustomCurrency';
import {compare} from './components/helpers';

import storage from './tickets'
import logo from './img/logo.png'

import './styles/App.scss';

function App() {
  const [checkedTransfer, setCheck] = useState(["all"]);
  const [currency, setCurrency] = useState("rub");

  storage.tickets.sort(compare);

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} width={60} height={60} className="App-logo" alt="logo" />
      </header>

      <section className="App-section">
        <aside className="aside">
          <div className="App-aside">

            <div className="currency">
              <p className="App-aside__title">Валюта</p>
              <div className="currency-list">
                <CustomCurrency value="rub" index="first" currency={currency} setCurrency={setCurrency}/>
                <CustomCurrency value="usd" index="second" currency={currency} setCurrency={setCurrency}/>
                <CustomCurrency value="eur" index="third" currency={currency} setCurrency={setCurrency}/>
              </div>
            </div>

            <div className="number-of-transfers">
              <p className="App-aside__title">Количество пересадок</p>
              <div className="number-of-transfers__list">
                <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes("all")} countTransfer="all" label="Все"/>
                <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(0)} countTransfer={0} label="Без пересадок"/>
                <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(1)} countTransfer={1} label="1 пересадка"/>
                <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(2)} countTransfer={2} label="2 пересадки"/>
                <CustomCheckbox setCheck={setCheck} checkedTransfer={checkedTransfer.includes(3)} countTransfer={3} label="3 пересадки"/>
              </div>
            </div>

          </div>
        </aside>

        <main className="main">
          <div className="App-main">
            {storage.tickets.map((item, index) => {
              if (checkedTransfer.includes('all') || checkedTransfer.includes(item['stops'])) {
                return <TicketElement item={item} currency={currency} key={index}/>
              }
              return null
            })}
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;
