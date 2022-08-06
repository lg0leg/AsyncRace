import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { carList } from '../../utils/carNames/carNames';
import './garage.scss';
import CreateCar from '../create-car/create-car';
import UpdateCar from '../update-car/update-car';
import RaceBtn from '../race-button/race-button';
import ResetBtn from '../reset-button/reset-button';
import GenerateCarsBtn from '../generate-cars-button/generate-cars-button';
import Raceline from '../race-line/race-line';

export default function Garage() {
  const [cars, setCars] = useState<{ arrCarNames: string[] }>({
    arrCarNames: [],
  });
  const [currentItems, setCurrentItems] = useState(['first car']);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(Object.values(cars.arrCarNames).slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Object.keys(cars.arrCarNames).length / itemsPerPage));
  }, [itemOffset, itemsPerPage, cars]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % Object.keys(cars.arrCarNames).length;
    setItemOffset(newOffset);
  };

  const generateCars = () => {
    let arrCarNames = [];
    while (arrCarNames.length < 100) {
      let num1 = Math.floor(Math.random() * 296);
      let num2 = Math.floor(Math.random() * Object.values(carList)[num1].length);
      let Brand = Object.keys(carList)[num1];
      let Model = Object.values(carList)[num1][num2];
      arrCarNames.push(`${Brand} ${Model}`);
    }
    setCars({ arrCarNames });
    // console.log('-----------------');
    // console.log(cars);
    // console.log(Object.values(cars));
    // console.log(Object.keys(cars));
    // console.log(currentItems);
  };

  return (
    <div className="garage">
      <div className="garage-controls">
        <div className="garage-controls-1">
          <CreateCar />
          <UpdateCar />
        </div>
        <div className="garage-controls-2">
          <RaceBtn />
          <ResetBtn />
          <GenerateCarsBtn clickHandler={generateCars} />
        </div>
      </div>
      <div className="garage-titles">
        <h1 className="garage-h1">
          Garage (<span id="total-car-counter">0</span>)
        </h1>
      </div>
      <div className="garage-raceway">{currentItems && (currentItems as string[]).map((item: string, idx: number) => <Raceline key={idx + Math.random()} name={item} />)}</div>
      <div className="garage-pagination">
        <ReactPaginate breakLabel="..." nextLabel="next" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="prev" renderOnZeroPageCount={() => null} />
      </div>
    </div>
  );
}
