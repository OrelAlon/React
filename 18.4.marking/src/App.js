import React, { useState } from 'react';

import './App.css';

function App() {
  const resetState = ['one', 'two', 'three', 'four', 'five'];
  const resetCheck = [];
  //my state
  const [checkBoxs, setCheckBoxs] = useState(resetState);
  const [check, setCheck] = useState(resetCheck);

  const handleCheck = (e, item) => {
    e
      ? setCheck([...check, item])
      : setCheck(check.filter((task) => task !== item));

    // setCheck([...check, item]);
    // console.log(check);
  };
  const onDel = () => {
    console.log(check);
    console.log(checkBoxs);
    setCheckBoxs(checkBoxs.filter((item) => !check.includes(item)));
    setCheck(['']);
  };
  const onReset = () => {
    setCheckBoxs(resetState);
    setCheck([]);
  };

  return (
    <div className='App'>
      <h1>Check Box App</h1>
      <div>
        {checkBoxs.map((item, index) => (
          <div key={index}>
            <label htmlFor={item}>{item}</label>
            <input
              type='checkBox'
              id={item}
              onChange={(e) => handleCheck(e.target.checked, item)}
            />
          </div>
        ))}
        <button onClick={onDel}>Del</button>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

// {name:'one', id: 1},
// {name:'two', id: 2},
// {name:'three', id: 3},
// {name:'four', id: 4},
// {name:'five', id: 5},
