import React from 'react';
import ReactDOM from 'react-dom';

const data = ['hello', 'world'];
const number1 = 5;
const number2 = 6;
const string = 'I love React!';

const App = () => {
  return (
    <div>
      <div
        className='box1'
        style={{ background: 'green', width: '600px', height: '400px' }}
      >
        <div
          className='box2'
          style={{ background: 'lightBlue', width: '500px', height: '300px' }}
        >
          <div className='box3'></div> <div className='box4'></div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
