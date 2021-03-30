import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const country = ({ search }) => {
    console.log(search);
  };
  const handleChange = (e) => {
    setSearch(e);
    onSearch({ search });
  };

  return (
    <div>
      <label htmlFor='country'>Search County:</label>
      <br></br>
      <input
        type='text'
        id='country'
        value={search}
        onChange={(e) => handleChange(e.currentTarget.value)}
      ></input>
    </div>
  );
};

export default Search;
