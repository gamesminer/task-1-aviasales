import React from "react";

const monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь",
  "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
];

const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

const TicketElement = (props) => {
  const arrivalDate = props.item['arrival_date'];
  const departureDate = props.item['departure_date'];
  const ad = new Date(
    "20" + arrivalDate.substring(arrivalDate.lastIndexOf('.') + 1),
    arrivalDate.substring(arrivalDate.indexOf('.') + 1, arrivalDate.lastIndexOf('.')) - 1,
    arrivalDate.substring(0, arrivalDate.indexOf('.'))
  );
  const dd = new Date(
    departureDate.substring(departureDate.lastIndexOf('.') + 1),
    departureDate.substring(departureDate.indexOf('.') + 1, departureDate.lastIndexOf('.')) - 1,
    departureDate.substring(0, departureDate.indexOf('.'))
  );

  return (
    <div className="App-main__element">
      <div className="App-main__element__semi-block App-main__element__semi-block_left">
        <div className="App-main__turkish"/>
        <button className="App-main__element__button">
          <p className="App-main__element__button__label">Купить</p>
          <p className="App-main__element__button__label">за
            {props.currency === "rub" && ` ${Math.round(props.item['price'] * 100) / 100}₽`}
            {props.currency === "usd" && ` ${Math.round(props.item['price'] * 10 / 63.29) / 10}$`}
            {props.currency === "eur" && ` ${Math.round(props.item['price'] * 10 / 71.42) / 10}€`}
          </p>
        </button>
      </div>

      <div className="App-main__element__semi-block App-main__element__semi-block_right">
        <div className="App-main__element__semi-block__part">
          <span className="App-main__element__semi-block__time">{props.item['departure_time']}</span>
          <div className="App-main__element__semi-block__time_transfer">
            <p className="App-main__element__semi-block__time_transfer__text">
              {props.item['stops'] > 0 && (`${props.item['stops']} ${props.item['stops'] === 1 ? "пересадка" : "пересадки"}`)}
            </p>
            <hr className="App-main__hr"/>
            <div className="App-main__plane"/>
          </div>
          <span className="App-main__element__semi-block__time">{props.item['arrival_time']}</span>
        </div>

        <div className="App-main__element__semi-block__part">
          <span className="App-main__element__semi-block__city">{props.item['origin']}, {props.item['origin_name']}</span>
          <span className="App-main__element__semi-block__city">{props.item['destination_name']}, {props.item['destination']}</span>
        </div>

        <div className="App-main__element__semi-block__part">
          <span className="App-main__element__semi-block__date">{ad.getDate()} {monthNames[ad.getMonth()]} {ad.getFullYear()}, {dayNames[ad.getDay()]}</span>
          <span className="App-main__element__semi-block__date">{dd.getDate()} {monthNames[dd.getMonth()]} {dd.getFullYear()}, {dayNames[dd.getDay()]}</span>
        </div>
      </div>
    </div>
  )
};

export default TicketElement