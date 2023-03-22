import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY () {
  const [mousePointer, setMousePointer] = useState({x:0, y:0});
  const mouseMoveHandler = document.addEventListener('mousemove', (event) => {setMousePointer({x: event.clientX, y: event.clientY})});
 

  return (
    <div onMouseMove={mouseMoveHandler} className='counter'>
      <div className='pointer' style={{transform: `translate(${mousePointer.x}px, ${mousePointer.y}px)`}} />
    </div>
    // 수평으로만 이동하도록 처리하려면 prev를 사용
    // setMousePointer((prev)=> ({x: event.clientX, y:prev.y})
    //객체가 여러개 담겨있다면..
    // setMousePointer((prev)=> ({...prev, x: event.clientX})
  );
}