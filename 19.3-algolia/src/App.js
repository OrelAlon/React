import React, { useEffect, useState } from 'react';

import axios from 'axios';

import './App.css';

function App() {
  const [myData, setMyData] = useState([]);
  const [mySearch, setMySearch] = useState([]);
  const [userQuery, setUserQuery] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const hooks = 'hooks';
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${userQuery}`
      );
      setMyData(data.hits);
    };
    fetch();
  }, [userQuery]);

  const handleClick = () => setUserQuery(mySearch);

  return (
    <div className='App'>
      <h1>Algolia Api</h1>
      <label htmlFor='search'>Search for Doc:</label>
      <br></br>
      <input
        type='text'
        id='search'
        value={mySearch}
        onChange={(e) => setMySearch(e.currentTarget.value)}
      ></input>
      <button onClick={handleClick}>Search</button>
      <ul>
        {myData.map((e) => (
          <li>
            {' '}
            <a href={e.url}>{e.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
