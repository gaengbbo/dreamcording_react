import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export default function AppCounter () {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(pre => pre + 1);
  }
  return (
    <div className='container'>
      <div className='banner'>
        Total count: {number} {number > 10 ? '💥': '💦'}
      </div>
      <div className='counters'>
        <Counter total={number} onClick={handleClick}/>
        <Counter total={number} onClick={handleClick}/>
      </div>
    </div>
  );
}