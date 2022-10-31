import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tareas = useSelector((state) => state.tasks);

  const [tarea, setTarea] = useState({
    title: '',
    desc: '',
  });

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('tarea enviada', tarea);
    if (params.id) {
      dispatch(editTask(tarea));
      navigate('/');
    } else {
      dispatch(addTask({ ...tarea, id: uuid() }));
      setTarea({
        title: '',
        desc: '',
      });
      navigate('/');
    }
  };

  useEffect(() => {
    params.id ? console.log('editando') : console.log('creando');

    if (params.id) {
      const buscarTarea = tareas.filter((tarea) => {
        return tarea.id === params.id;
      });
      setTarea(buscarTarea[0]);
      console.log(buscarTarea);
    }
  }, []);

  return (
    <div>
      <h3>Formulario</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={tarea.title}
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <textarea
            name="desc"
            placeholder="description"
            value={tarea.desc}
            onChange={handleChange}
          ></textarea>
        </div>
        <br />
        <button>Guardar tarea</button>
      </form>
    </div>
  );
};

export default TaskForm;
