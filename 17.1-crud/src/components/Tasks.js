import OneTask from './OneTask';

const Tasks = ({ tasks, onDelete, onDouble }) => {
  return (
    <div>
      <div>
        {tasks.map((task) => (
          <OneTask
            key={task.id}
            task={task}
            onDelete={onDelete}
            onDouble={onDouble}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
