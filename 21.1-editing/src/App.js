import React, { useEffect, useRef, useState } from 'react';

import './App.css';

function App() {
  const [edit, setEdit] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleEdit = () => {
    setEdit(!edit);
  };
  return (
    <div className='App'>
      <h1>Edit App!</h1>
      <input className={edit ? '' : 'hidden'} ref={ref}></input>
      <button onClick={handleEdit}>{edit ? 'Save...' : 'Edit'}</button>
    </div>
  );
}

export default App;
