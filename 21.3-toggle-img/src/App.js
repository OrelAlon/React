import React, { useRef, useState } from 'react';
import Img from './Img';
import './App.css';

function App() {
  const imgRef1 = useRef();
  const [color, setColor] = useState(true);
  const [color2, setColor2] = useState(true);

  // console.log(imgRef1);
  return (
    <div className='App'>
      <h1>Img Toggle</h1>
      <img
        ref={imgRef1}
        className={color && 'imgBoom'}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9opfK6V-D1F-Ozk80AMaHgz8FVuVX5c9T0g&usqp=CAU'
        alt='ff'
        onMouseEnter={() => setColor(!color)}
        onMouseLeave={() => setColor(!color)}
      />
      {/* <Img color={color} /> */}
      <img
        className={color2 && 'imgBoom'}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AgkgjyTKHmJxIdSNDOVDUWQN8PlK6Cj86Q&usqp=CAU'
        alt='cc'
        onMouseEnter={() => setColor2(!color2)}
        onMouseLeave={() => setColor2(!color2)}
      />
    </div>
  );
}

export default App;
