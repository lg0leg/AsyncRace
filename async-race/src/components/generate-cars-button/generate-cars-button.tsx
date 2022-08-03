import { MouseEventHandler } from 'react';
import './generate-cars-button.scss';

export default function GenerateCarsBtn(props: { clickHandler: MouseEventHandler<HTMLButtonElement> | undefined; }) {
  return (
    <button className="generate-cars-button" onClick={props.clickHandler}>
      Generate cars
    </button>
  );
}
