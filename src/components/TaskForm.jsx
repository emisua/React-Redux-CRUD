import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tareas = useSelector((state) => state.tasks.tareas);
  const [tarea, setTarea] = useState({
    title: '',
    desc: '',
  });
  const [edicion, setEdicion] = useState(false)

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
      setEdicion(true)
      const buscarTarea = tareas.filter((tarea) => {
        return tarea.id === params.id;
      });
      setTarea(buscarTarea[0]);
      console.log(buscarTarea);
    } else {
      setEdicion(false)
    }
  }, []);

  return (
    <div className='container mx-auto'>
      <div className="grid place-items-center min-h-screen ">
        <div className="formulario max-w-sm w-full mx-auto">
          <h3 className='text-center text-4xl mb-6 font-semibold text-teal-00'>{edicion ? 'Edita la tarea' : 'Crea una tarea'}</h3>
          <form
            className=' bg-slate-200 p-4 rounded-lg shadow-2xl '
            onSubmit={handleSubmit}
          >
            <div class="mb-4">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Título de la tarea</label>
              <input
                type="text"
                id="title"
                name="title"
                value={tarea.title}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4" placeholder="Título de la tarea..."
                required="" />

              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Descripción de la tarea</label>
              <textarea
                name="desc"
                value={tarea.desc}
                onChange={handleChange}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Describe tu tarea...">
              </textarea>

            </div>

            <button type="submit" class="text-zinc-900 bg-teal-400 hover:bg-teal-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{edicion ? 'Editar tarea' : 'Crear tarea'}</button>
          </form>
        </div>

      </div>

    </div>
  );
};

export default TaskForm;
