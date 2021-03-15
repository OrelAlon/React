import React from 'react';

const Btn = () => {
  return (
    <div>
      <Btn1 content='imprtent' style={{ fontWeight: 'bold' }}></Btn1>
      <Btn1 content='not imprtent'></Btn1>
    </div>
  );
};

const Btn1 = (props) => (
  <button className='yes' style={props.style}>
    {props.content}
  </button>
);

export default Btn;
