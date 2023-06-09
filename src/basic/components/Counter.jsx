import React, { useState } from 'react';

export default function Counter ({total, onClick}) {
  const [number, setNumber] = useState(0);
  const clickHandler = (event) => {
    setNumber( number + 1);
    onClick();
  }
  return (
      <div className='counter'>
        <p className='number'>{number} <span className='total'>/{total}</span></p>
        <button className='button' onClick={clickHandler}>Add +</button>      
      </div>
  );
}