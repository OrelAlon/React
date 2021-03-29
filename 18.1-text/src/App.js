import React, { useState } from 'react';

import './App.css';

function App() {
  const myStory = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae ut aut
  quisquam, molestiae, impedit laborum hic voluptatum doloribus corrupti
  fugit dolores voluptatem illum odit laboriosam porro, odio quibusdam
  illo sunt dolorem delectus accusantium distinctio quasi? Libero corrupti
  rerum, molestias maxime voluptas, eos dolorem illum non officia ea vel
  eveniet ducimus consequuntu! Corrupti repellendus dolorum distinctio
  asperiores m ex soluta vero. Qui tempora in impedit corrupti,
  exercitationem aperiam recusandae perspiciatis repellat molestiae
  accusantium neque ullam quaerat porro nostrum voluptatibus! Officia
  maiores necessitatibus laboriosam corrupti quo et at nam? Illum
  distinctio fugit dignissimos aspertur debitis quod mollitia animi
  quos, excepturi magnam rem, maxime ipsa impedit voluptatibus aliquid
  rerum perspiciatis molestiae, a explicabo ad?`;

  //////my state
  const [text, setText] = useState(myStory);
  const [showBtn, setshowBtn] = useState(true);
  const [maxLength] = useState(20);
  /////////
  /////////my func

  const handleOnClick = () => {
    if (showBtn) {
      setText(text.substring(0, maxLength));
      setshowBtn(!showBtn);
    } else {
      setText(myStory);
      setshowBtn(!showBtn);
    }
  };
  /////////
  ///////// my jsx
  return (
    <div className='App'>
      <h1>My Story</h1>

      <p>
        {text}
        <button onClick={handleOnClick}>{showBtn ? 'Less' : 'more'}</button>
      </p>
    </div>
  );
}

export default App;
