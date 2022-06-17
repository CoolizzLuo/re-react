import { useState } from 'react';
import Square from './Square';
import Input from './Input';
import './ColorChanger.css';

const ColorChanger = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className='colorChanger'>
      <Square colorValue={colorValue} hexValue={hexValue} isDarkText={isDarkText} />
      <Input colorValue={colorValue} setColorValue={setColorValue} setHexValue={setHexValue} isDarkText={isDarkText} setIsDarkText={setIsDarkText} />
    </div>
  );
};

export default ColorChanger;
