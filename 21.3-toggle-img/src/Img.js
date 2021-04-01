import React, { useRef } from 'react';

const Img = ({ src }) => {
  const imgRef = useRef();

  return (
    <div>
      <img
        ref={imgRef}
        className={''}
        src={src}
        alt='ff'
        onMouseEnter={() => (imgRef.current.className = 'imgBoom')}
        onMouseLeave={() => (imgRef.current.className = '')}
      />
    </div>
  );
};

export default Img;
