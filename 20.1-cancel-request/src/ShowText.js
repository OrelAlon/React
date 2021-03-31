import React, { useState } from 'react';

const ShowText = ({ text, maxLength }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden((hidden) => !hidden);
  };

  if (text.length <= maxLength) {
    return <p>{text}</p>;
  }

  const renderShortenText = () => {
    const shortenText = text.substr(0, maxLength);
    if (hidden) {
      return (
        <p>
          {shortenText}...
          <span
            onClick={handleClick}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            read more
          </span>
        </p>
      );
    } else {
      return (
        <p>
          {text}
          <span
            onClick={handleClick}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            show less
          </span>
        </p>
      );
    }
  };

  return <div>{renderShortenText()}</div>;
  //extra
  //   return (
  //     <div>
  //       {hidden ? (
  //         <p>
  //           {text.substr(0, maxLength)}...
  //           <span onClick={() => setHidden((s) => !s)}>show more</span>
  //         </p>
  //       ) : (
  //         <p>
  //           {text} <span onClick={() => setHidden((s) => !s)}>show less</span>
  //         </p>
  //       )}
  //     </div>
  //   );
};

export default ShowText;
