import './garage.scss';
import CreateCar from '../create-car/create-car';
import UpdateCar from '../update-car/update-car';

function Garage() {
  return (
    <div className="garage">
      <CreateCar />
      <UpdateCar />
    </div>
  );
}

export default Garage;
