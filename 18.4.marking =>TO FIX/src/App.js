import React from 'react';
import Check from './Check';

import './App.css';

function App() {
  const data = ['one', 'two', 'three', 'four', 'five'];
  return (
    <div>
      <Check data={data} />
    </div>
  );
}

export default App;

// {name:'one', id: 1},
// {name:'two', id: 2},
// {name:'three', id: 3},
// {name:'four', id: 4},
// {name:'five', id: 5},
