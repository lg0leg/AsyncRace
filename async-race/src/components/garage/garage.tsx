import './garage.scss';
import CreateCar from '../create-car/create-car';
import UpdateCar from '../update-car/update-car';
import RaceBtn from '../race-button/race-button';
import ResetBtn from '../reset-button/reset-button';
import GenerateCarsBtn from '../generate-cars-button/generate-cars-button';
import Raceline from '../race-line/race-line';

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
        <Raceline />
        <Raceline />
        <Raceline />
        <Raceline />
        <Raceline />
        <Raceline />
        <Raceline />
      </div>
      <div className="garage-pagination"></div>
    </div>
  );
}
