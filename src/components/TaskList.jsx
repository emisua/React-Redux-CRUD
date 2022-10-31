import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';
import { Link } from 'react-router-dom';
import Search from './Search';


const TaskList = () => {
  const tareas = useSelector((state) => state.tasks.tareas);
  const resultadoBusqueda = useSelector((state) => state.tasks.resultadoBusqueda);

  return (
    <div className='container mx-auto p-4'>
      <nav className='mb-8 flex justify-between w-full h-auto items-center'>
        <Link to="/form" className='flex items-center py-2 px-3 text-sm font-medium text-center text-zinc-900 bg-emerald-200 rounded-lg hover:bg-emerald-400 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800'>
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15" />
        </svg> Crear tarea
        </Link>
        <Search/>
      </nav>
      <header className='mb-6'>
        <h1 className='text-2xl'>Tareas: <span className='font-bold text-emerald-300'>{tareas.length}</span></h1>
      </header>

      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {resultadoBusqueda.length > 0 ?
        resultadoBusqueda.map((tarea) => {
          return (
            <li key={tarea.id}>
              <Task tarea={tarea} key={tarea.id} />
            </li>
          );
        }):
        tareas.map((tarea) => {
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
