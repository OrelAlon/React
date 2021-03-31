import React, { useEffect, useState } from 'react';
import {
  fetchChuck,
  fetchCategories,
  categoriesJoke,
  searchJoke,
} from './api/chuckApi';

import './App.css';

function App() {
  const [randomJoke, setRandomJoke] = useState([]);
  const [categories, setCategories] = useState(['genral']);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
    };
    fetch();
  }, []);

  const handleCategoryJoke = async (e) => {
    if (e === '1') {
      // if it is a randome
      const data = await fetchChuck();
      setRandomJoke(data.value);
    } else {
      const jokes = await categoriesJoke(e);
      console.log(jokes);
      setRandomJoke(jokes);
    }
  };

  const handleSearchJoke = async (search) => {
    // console.log(search);
    const data = await searchJoke(search);
    console.log(data);
    console.log(searchJoke());
  };

  return (
    <div className='App'>
      <h1>Chuck Norris Api With Hooks</h1>
      <select onChange={(e) => handleCategoryJoke(e.target.value)}>
        <option value={'1'}>random Joke</option>

        {categories.map((c, idx) => (
          <option key={idx}>{c}</option>
        ))}
      </select>
      <button>Give Me Joke</button>
      {/* //how to active this */}
      <p>{randomJoke}</p>
      <input
        type='text'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => handleSearchJoke(search)}>Search</button>
    </div>
  );
}

export default App;
