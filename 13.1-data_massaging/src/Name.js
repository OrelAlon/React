import React from 'react';

const Name = ({ names }) => {
  return names.map((name) => {
    return <li>{name}</li>;
  });
};

export default Name;
