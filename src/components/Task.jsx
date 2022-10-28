import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const Task = ({ tarea }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(tarea.id));
  };

  return (
    <div>
      <h4>{tarea.title}</h4>
      <p>{tarea.desc}</p>
      <button onClick={() => handleDelete(tarea.id)}>Borrar</button>
      <Link to={`/edit/${tarea.id}`}>Editar</Link>
    </div>
  );
};

export default Task;
