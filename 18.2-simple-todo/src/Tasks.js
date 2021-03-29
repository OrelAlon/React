import OneTask from './OneTask';

const Tasks = ({ tasks, onDouble }) => {
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <OneTask task={task}
             onDouble={onDouble} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
