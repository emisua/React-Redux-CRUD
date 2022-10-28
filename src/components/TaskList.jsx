import {useSelector} from 'react-redux'
import Task from './Task'

const TaskList = () => {
const tareas = useSelector(state => state.tasks)
  return <div>
    <h3>Lista de tareas</h3>
    <ul>
      {tareas.map(tarea => {
        return(
          <li><Task tarea={tarea}/></li>
        )
      })}
    </ul>
  </div>
};

export default TaskList;
