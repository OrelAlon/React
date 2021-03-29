import React, { useState } from 'react';
import Tasks from './Tasks';

import './App.css';

function App() {
  /// my state
  const [tasks, setTask] = useState([
    { id: 1, name: 'CSS', completed: true },
    { id: 2, name: 'JavaScript', completed: true },
    { id: 3, name: 'Learn React', completed: false },
    { id: 4, name: 'Learn mongoDB', completed: false },
    { id: 5, name: 'Learn Node JS', completed: false },
  ]);
  /// myy func

  const handleToggleTask = (id) => {
    setTask(
      tasks.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  ///my jsx
  return (
    <div className='App'>
      <h1>My ToDo App with Hooks</h1>
      <Tasks tasks={tasks} onDouble={handleToggleTask} />{' '}
    </div>
  );
}

export default App;
