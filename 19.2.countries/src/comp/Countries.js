import { useState } from 'react';

const Countries = ({ data }) => {
  return (
    <div>
      <ul>
        <li>{data}</li>
      </ul>
    </div>
  );
};

export default Countries;
