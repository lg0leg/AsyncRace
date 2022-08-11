import './update-car.scss';
import React, { useEffect, useState } from 'react';
import { PopoverPicker } from '../../utils/colorPicker/PopoverPicker.js';

export default function UpdateCar(props: { name: string; color: string }) {
  const [color, setColor] = useState('#aabbcc');
  const [inputValue, setInput] = useState('');

  useEffect(() => {
    setInput(props.name);
    setColor(props.color);
  }, [props.name, props.color]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const clickHandler = () => {
    console.log('update: ' + color + '\n' + inputValue);
  };

  return (
    <div className="update-car">
      <input type="text" className="choice-name" onChange={inputHandler} value={inputValue} />
      <div className="update-choice-color">
        <PopoverPicker color={color} onChange={setColor} />
      </div>
      <button type="button" className="update-button" onClick={clickHandler}>
        Update
      </button>
    </div>
  );
}
