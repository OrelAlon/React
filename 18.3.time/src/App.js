import React, { useState } from 'react';

import './App.css';

function App() {
  /////my state
  const [time, setTime] = useState(1);
  // const [minutes, setMinutes] = useState('');
  // const [hours, setHours] = useState('');
  /////my func

  ///my jsx
  return (
    <div className='App'>
      <h1>Convert Time App</h1>
      <div className='inputDiv'>
        <label htmlFor='seconds'>seconds:</label>
        <input
          type='text'
          id='seconds'
          name='Time'
          value={isNaN(time) ? '' : time * 60}
          onChange={(e) => setTime(e.target.value / 60)}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor='minutes'>minutes:</label>
        <input
          type='text'
          id='minutes'
          value={isNaN(time) ? '' : time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className='inputDiv'>
        <label htmlFor='hours'>hours:</label>
        <input
          type='text'
          id='hours'
          value={isNaN(time) ? '' : time / 60}
          onChange={(e) => setTime(e.target.value * 60)}
        />
      </div>
    </div>
  );
}

export default App;
