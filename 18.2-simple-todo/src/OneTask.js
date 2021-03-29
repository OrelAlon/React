import { FaTimes } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

const OneTask = ({ task, onDouble }) => {
  return (
    <div
      className={`oneTask ${task.completed && 'delete'}`}
      onDoubleClick={() => onDouble(task.id)}
    >
      {task.name}
      {task.completed ? <FaTimes /> : <FaCheck />}
    </div>
  );
};

export default OneTask;
