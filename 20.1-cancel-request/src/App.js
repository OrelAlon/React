import React, { useState } from 'react';
import CleanErr from './CleanErr';

import './App.css';

function App() {
  // const [mySearch, setMySearch] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='App'>
      <h1>Error Handle</h1>
      <br></br>
      <button onClick={() => setShowInfo((showInfo) => !showInfo)}>
        {showInfo ? 'Search' : 'Hide'}
      </button>
      {showInfo && <CleanErr />}
    </div>
  );
}

export default App;
///orel
