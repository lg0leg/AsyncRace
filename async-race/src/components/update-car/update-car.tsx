import './update-car.scss';
import React, { useState } from 'react';
import { PopoverPicker } from '../../utils/colorpick/PopoverPicker.js';

export default function UpdateCar() {
  const [color, setColor] = useState('#aabbcc');

  const clickHandler = () => {
    console.log('update color: ' + color);
  };

  return (
    <div className="update-car">
      <input type="text" className="choice-name" />
      <div className="update-choice-color">
        <PopoverPicker color={color} onChange={setColor} />
      </div>
      <button type="button" className="update-button" onClick={clickHandler}>
        Update
      </button>
    </div>
  );
}
