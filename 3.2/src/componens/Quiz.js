import React from 'react';

const Quiz = () => {
  return (
    <div>
      <div className='container'>
        <h1>How Much do you like front End?</h1>
        <Q1></Q1>
        <Q2></Q2>
      </div>
    </div>
  );
};

const Q1 = () => {
  return (
    <div>
      <Q1Title></Q1Title>
      <Q1Input></Q1Input>
    </div>
  );
};
const Q2 = () => {
  return (
    <div>
      <Q2Title></Q2Title>
      <Q2Input></Q2Input>
    </div>
  );
};
const Q1Title = () => <h2>some Q1</h2>;
const Q1Input = () => <input type='range'></input>;
const Q2Title = () => <h2>some Q2</h2>;
const Q2Input = () => <input type='text'></input>;

export default Quiz;
{
  /* <input
type='text'
name='q2'
style={{ display: 'block', margin: '0 auto' }}
/>

<input
type='range'
name='q1'
min='1'
max='5'
style={{ display: 'block', margin: '0 auto' }}
/> */
}
