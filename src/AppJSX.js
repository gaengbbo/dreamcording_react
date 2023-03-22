import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = '은경';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <Fragment>
      <h1 className='orange'> {`Hello! ${name}`}</h1>
      <h2> hi!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
        </ul>
    </Fragment>
  );
}

export default AppJSX;
