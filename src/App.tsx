import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { PrimeStateType } from './Redux/redux-store';
import {
  initializedPriceForOne,
  initializedPriceForFamily,
  initializedPriceForTwo,
} from './Redux/card-reducer';
import { useEffect, useState } from 'react';

type PropsType = {
  priceForOne: number;
  priceForTwo: number;
  priceForFamily: number;
  initializedPriceForOne: (priceForOne: number) => void;
};

const App: React.FC<PropsType> = ({
  priceForOne,
  priceForTwo,
  priceForFamily,
}) => {
  const bookingOne = () => {
    initializedPriceForOne(priceForOne + 2);
    console.log(priceForOne + 2);
  };
  const bookingTwo = () => {
    initializedPriceForOne(priceForOne + 2);
    console.log(priceForTwo + 2);
  };
  const bookingFamily = () => {
    initializedPriceForOne(priceForOne + 2);
    console.log(priceForFamily + 2);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <main>
          <header>
            <h2>Киев</h2>
          </header>
          <div>
            <img src="./images/Rectangle.png" alt="Kyiv" />
          </div>
          <footer>
            <p>Гостиницы</p>
            <p>Хостелы</p>
            <p>Комнаты посуточно</p>
            <p>Курортные отели</p>
          </footer>
        </main>

        <aside>
          <header>Украина</header>
          <div>
            <p>
              <img src="images/Vector.png" alt="Bed" onClick={bookingTwo} />{' '}
              {priceForTwo} USD
            </p>
            <p>
              <img src="images/Vector.jpg" alt="Bed" onClick={bookingFamily} />
              <img
                src="images/Vector.png"
                alt="Bed"
                onClick={bookingFamily}
              />{' '}
              {priceForFamily} USD
            </p>
            <p>
              <img src="images/Vector1.png" alt="Bed" onClick={bookingOne} />{' '}
              {priceForOne} USD
            </p>
          </div>
          <footer>
            <p>Квартиры посуточно</p>
            <p>Дома посуточно</p>
            <p>Дома для отпуска</p>
            <p>Все варианты</p>
          </footer>
        </aside>
      </div>
    </div>
  );
};
let mapStateToProps = (state: PrimeStateType) => ({
  priceForOne: state.card.priceForOne,
  priceForTwo: state.card.priceForTwo,
  priceForFamily: state.card.priceForFamily,
});

export default connect(mapStateToProps, {
  initializedPriceForOne,
  initializedPriceForTwo,
  initializedPriceForFamily,
})(App);
