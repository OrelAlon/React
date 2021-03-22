import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <h3>{data.price}</h3>
      <img src={data.imageUrl} />
      <Link to='/products'>
        <button>Go Home</button>
      </Link>
    </div>
  );
};
export default Card;
