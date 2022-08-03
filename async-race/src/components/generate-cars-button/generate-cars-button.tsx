import './generate-cars-button.scss';
import React, { useState } from 'react';
import { carList } from '../../utils/carNames/carNames';

export default function GenerateCarsBtn() {
  const generateCars = () => {
    let arrCarNames = [];
    while (arrCarNames.length < 10) {
      let num1 = Math.floor(Math.random() * 296);
      let num2 = Math.floor(Math.random() * Object.values(carList)[num1].length);
      let Brand = Object.keys(carList)[num1];
      let Model = Object.values(carList)[num1][num2];
      arrCarNames.push(`${Brand} ${Model}`);
    }
    setCars({ arrCarNames });

    console.log(arrCarNames);
    console.log(cars);
    // console.log(cars);
    // console.log(Object.values(carList)[num1][num2]);
    // console.log(Object.values(carList)[num1].length);
    // console.log(`${Brand} ${Model}`);
  };

  const [cars, setCars] = useState<{ arrCarNames: string[] }>({
    arrCarNames: [],
  });

  return (
    <button className="generate-cars-button" onClick={generateCars}>
      Generate cars
    </button>
  );
}
