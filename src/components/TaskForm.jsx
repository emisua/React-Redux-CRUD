import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';

const TaskForm = () => {
  const dispatch = useDispatch();

  const [tarea, setTarea] = useState({
    title: '',
    desc: '',
  });

  const handleChange = (e) => {
    setTarea({ ...tarea, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tarea.id = uuid();
    console.log('tarea enviada', tarea);
    dispatch(addTask(tarea));
    setTarea({
      title: '',
      desc: '',
    });
  };
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
