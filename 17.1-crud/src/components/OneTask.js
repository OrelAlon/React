import { FaTimes } from 'react-icons/fa';

const OneTask = ({ task, onDelete, onDouble }) => {
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''} `}
      onDoubleClick={() => onDouble(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: 'red', cursor: 'pointer' }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default OneTask;
