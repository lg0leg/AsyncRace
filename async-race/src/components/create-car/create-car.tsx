import './create-car.scss';
// import ColorPicker from '../../utils/color-picker';
import React, { useState } from 'react';
import { PopoverPicker } from '../../utils/colorpick/PopoverPicker.js';

export default function CreateCar() {
  const [color, setColor] = useState('#ccbbaa');

  const clickHandler = () => {
    console.log('create color: ' + color);
  };

  return (
    <div className="create-car">
      <input type="text" className="choice-name" />
      <div className="create-choice-color">
        {/* <ColorPicker /> */}
        <PopoverPicker color={color} onChange={setColor} />
      </div>
      <button type="button" className="create-button" onClick={clickHandler}>
        Create
      </button>
    </div>
  );
}
