import React from 'react';
import './AppTheme.css';
import { DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme () {
  return(
    <>
      <DarkModeProvider>
        <Header />
        <Main />
        <Footer />
      </DarkModeProvider>
    </>
  );
}

function Header () {
  return <header className='header'>Header</header>;
}

function Main () {
  return (
    <div></div>
  );
}

function Footer () {
  return (
    <div>

    </div>
  );
}