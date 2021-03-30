import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [starWars, setStartWars] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('https://swapi.dev/api/films/2/');
      setStartWars(data);
    };
    fetch();
  }, []);
  console.log(starWars);

  return (
    <div className='App'>
      <h1>Simple Fetch Data</h1>
      <h2>
        Title: <span>{starWars.title}</span>
      </h2>
      <h3>
        {' '}
        Director: <span>{starWars.director}</span>
      </h3>
    </div>
  );
}

export default App;
