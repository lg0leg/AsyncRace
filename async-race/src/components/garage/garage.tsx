import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import './garage.scss';
import CreateCar from '../create-car/create-car';
import UpdateCar from '../update-car/update-car';
import RaceBtn from '../race-button/race-button';
import ResetBtn from '../reset-button/reset-button';
import GenerateCarsBtn from '../generate-cars-button/generate-cars-button';
import Raceline from '../race-line/race-line';

// const items = [<Raceline />, <Raceline />, <Raceline />, <Raceline />, <Raceline />, <Raceline />];
const items = [
  ...Array(100)
    .fill(0)
    .map(() => <Raceline />),
];

export default function Garage() {
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
          <GenerateCarsBtn />
        </div>
      </div>
      <div className="garage-titles">
        <h1 className="garage-h1">
          Garage (<span id="total-car-counter">0</span>)
        </h1>
      </div>
      <div className="garage-raceway">
        <PaginatedItems itemsPerPage={7} />
      </div>
      {/* <div className="garage-pagination"></div> */}
    </div>
  );
}

// @ts-ignore
function Items({ currentItems }) {
  return <>{currentItems && currentItems.map((item: React.FC) => item)}</>;
}

// @ts-ignore
function PaginatedItems({ itemsPerPage }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // @ts-ignore
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate breakLabel="..." nextLabel="next" onPageChange={handlePageClick} pageRangeDisplayed={5} pageCount={pageCount} previousLabel="prev" renderOnZeroPageCount={() => null} />
    </>
  );
}
