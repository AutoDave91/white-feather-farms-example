import React from 'react';
import './Display.css';
import Home from './Home';
import Animals from './Animals';
import Family from './Family';
import Events from './Events';

function Display() {
  return (
    <div className="App">
      <Home className='homeWindow'/>
      <Animals className='animalsWindow'/>
      <Family className='familyWindow'/>
      <Events className='eventsWindow'/>
    </div>
  );
}

export default Display;