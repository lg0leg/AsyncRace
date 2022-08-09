import './create-car.scss';
import React, { useState } from 'react';
import { PopoverPicker } from '../../utils/colorPicker/PopoverPicker.js';

export default function CreateCar() {
  const [color, setColor] = useState('#ccbbaa');
  const [input, setInput] = useState('');

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    console.log('Create car:' + '\n' + ' color: ' + color + '\n' + ' name: ' + input);
  };

  return (
    <div className="create-car">
      <input type="text" className="choice-name" onChange={inputHandler} />
      <div className="create-choice-color">
        <PopoverPicker color={color} onChange={setColor} />
      </div>
      <button type="button" className="create-button" onClick={clickHandler}>
        Create
      </button>
    </div>
  );
}
