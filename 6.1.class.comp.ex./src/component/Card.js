import React from 'react';

const Card = (props) => {
  return (
    <div>
      <div className='container'>
        <img alt='nature' src={props.img}></img>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
        <a href={props.link}>{props.linkText}</a>
        <link></link>
      </div>
    </div>
  );
};

export default Card;
