import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CleanErr = () => {
  const [myData, setMyData] = useState([]);

  // const [userQuery, setUserQuery] = useState([]);
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const fetch = async () => {
      const react = 'react';
      try {
        const { data } = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${react}`,
          {
            cancelToken: source.token,
          }
        );

        setMyData(data.hits);
      } catch (e) {
        if (axios.isCancel(e)) {
          console.log(e.message);
        } else {
          console.log(e.message);
        }
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <h1>clean</h1>

      <ul>
        {myData.map((e, index) => (
          <p key={index}>{e.title}</p>
        ))}
      </ul>
    </div>
  );
};

export default CleanErr;
