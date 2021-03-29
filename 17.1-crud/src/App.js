import React from 'react';
import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import api from './Api/api';

import './App.css';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn', day: 'sunday', reminder: true },
    { id: 2, text: 'Eat', day: 'monday', reminder: false },
    { id: 3, text: 'Dance', day: 'wednesday', reminder: true },
  ]);
  // const [loading, setLoading] = React.useState('false');

  // //  async myData = ()=>await api.get('/users')

  // React.useEffect(() => {
  //   async function fetchMyApi() {
  //     try {
  //       const response = await api.get('/users');
  //       const myData = response.data;
  //       setTasks(
  //         myData.map((task) => {
  //           console.log(task.text);
  //           // return task.volumeInfo.title;
  //         })
  //       );
  //       console.log(myData[0].id);
  //     } catch (error) {
  //       setLoading('null');
  //     }
  //   }
  //   fetchMyApi();
  //   return [tasks, loading];
  // });
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        id === task.id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className='container'>
      <h1 style={{ background: 'lightGrey', textAlign: 'center' }}>
        ToDo App - React
      </h1>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAddTask={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onDouble={toggleReminder} />
      ) : (
        'No Tasks Yet'
      )}
    </div>
  );
}
export default App;
