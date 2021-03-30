import React, { useState } from 'react';

import './App.css';

function Check({ data }) {
  // const resetState = ['one', 'two', 'three', 'four', 'five'];
  const resetCheck = [];
  //my state
  const [checkBoxs, setCheckBoxs] = useState(data);
  const [check, setCheck] = useState([]);

  const handleCheck = (e, item) => {
    console.log(e);
    if (e) {
      setCheck([...check, item]);
    } else {
      setCheck(check.filter((task) => task !== item));
    }

    // setCheck([...check, item]);
    console.log(check);
  };
  const onDel = () => {
    // console.log(check);
    // console.log(checkBoxs);
    setCheckBoxs(checkBoxs.filter((item) => !check.includes(item)));
    console.log(checkBoxs);
  };
  const onReset = () => {
    setCheckBoxs(data);
    setCheck([]);
  };
  // console.log(check);
  // console.log(checkBoxs);

  return (
    <div className='App'>
      <h1>Check Box App</h1>
      <div>
        {checkBoxs.map((item) => (
          <div>
            <label htmlFor={item}>{item}</label>
            <input
              type='checkbox'
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

export default Check;

// {name:'one', id: 1},
// {name:'two', id: 2},
// {name:'three', id: 3},
// {name:'four', id: 4},
// {name:'five', id: 5},
