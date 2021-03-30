import React, { useEffect, useState } from 'react';
import Search from './comp/Search';
import Countries from './comp/Countries';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all');
      const countries = data.map((c) => c.name);

      setCountries(countries);
    };
    fetch();
  }, []);
  const onSearch = (s) => {
    console.log(s);
    const filtermg = countries.map((c) => {
      c.includes(s);
    });
    console.log(filtermg);
  };
  // console.log(countries);

  // console.log(search);
  return (
    <div className='App'>
      <h1>let's start</h1>
      <Search onSearch={onSearch} />

      {countries.map((c, index) => (
        <Countries key={index} data={c} />
      ))}
    </div>
  );
}

export default App;
