import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';

const Task = ({ tarea }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(tarea.id));
  };
  const { title, desc, id } = tarea
  return (

    <div className="p-4 bg-slate-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-xl font-bold tracking-tight text-zinc-800 dark:text-white">{title}</h5>
      <p className="mb-3 font-normal text-zinc-600 dark:text-gray-400">{desc}</p>
      <Link className='inline-flex items-center p-1 text-sm font-medium text-center text-slate-700 hover:bg-slate-300 rounded-sm mr-2' to={`/edit/${id}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
      </Link>
      <button onClick={() => handleDelete(id)} className="inline-flex items-center p-1 rounded-sm text-sm font-medium text-center text-slate-700 hover:bg-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
    </div>
  )
}

export default Task;
