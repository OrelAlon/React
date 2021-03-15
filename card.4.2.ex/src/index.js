import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Faker from 'faker';

const App = () => {
  return (
    <div>
      <Card
        h1='Love'
        p='come to visit'
        img={Faker.image.nature()}
        link='https://github.com/OrelAlon/React/tree/main/4.1.ex'
        linkText='pervEx'
      />
      <Card
        h1='cute'
        p='I must have '
        img={Faker.image.animals()}
        link='https://google.com'
        linkText='Google'
      />
    </div>
  );
};
const Card = (props) => {
  return (
    <div>
      <div className='container'>
        <img alt='nature' src={props.img}></img>
        <h1>{props.h1}</h1>
        <p>Must Visit!</p>
        <a href={props.link}>{props.linkText}</a>
        <a href={props.link2}>{props.link2Text}</a>
        <link></link>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

// src={Faker.image.nature()}
