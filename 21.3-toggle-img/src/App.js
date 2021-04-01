import React from 'react';
import Img from './Img';
import './App.css';

function App() {
  // console.log(imgRef1);
  return (
    <div className='App'>
      <h1>Img Toggle</h1>
      <Img
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9opfK6V-D1F-Ozk80AMaHgz8FVuVX5c9T0g&usqp=CAU'
        }
      />
      <Img
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8AgkgjyTKHmJxIdSNDOVDUWQN8PlK6Cj86Q&usqp=CAU'
        }
      />
      {/* <Img color={color} /> */}
    </div>
  );
}

export default App;
