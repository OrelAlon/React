import React from 'react';

const Box = (props) => {
  return (
    <div
      className={props.className}
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
      }}
    ></div>
  );
};

export default Box;
