import { useSelector } from 'react-redux';
import Task from './Task';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const tareas = useSelector((state) => state.tasks);
  return (
    <div>
      <header>
        <h1>Tareas: {tareas.length}</h1>
      </header>
      <nav>
        <Link to="/form">Crear tarea</Link>
      </nav>
      <ul>
        {tareas.map((tarea) => {
          return (
            <li key={tarea.id}>
              <Task tarea={tarea} key={tarea.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;
