import React, { useRef } from 'react';

import './App.css';

function App() {
  const vidRef = useRef(null);
  // const handlePlayVideo = () => {
  //   vidRef.current.play();
  // };
  return (
    <div className='App'>
      <h1>Play Video!</h1>
      <div>
        <video ref={vidRef}>
          <source
            src='https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4'
            type='video/mp4'
          />
        </video>

        <button onClick={() => vidRef.current.play()}>Play</button>
        <button onClick={() => vidRef.current.pause()}>Pause</button>
        <button onClick={() => vidRef.current.load()}>Must Again!</button>
      </div>
    </div>
  );
}

export default App;
