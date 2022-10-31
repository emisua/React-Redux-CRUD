import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tareas: [
    {
      id: '1',
      title: 'Tarea 1',
      desc: 'Desc tarea 1',
      completed: false,
    },
    {
      id: '2',
      title: 'Tarea futbol',
      desc: 'Desc tarea 2',
      completed: false,
    },
    {
      id: '3',
      title: 'Tarea futbol y golf',
      desc: 'Desc tarea 3',
      completed: false,
    },
    {
      id: '4',
      title: 'Tarea 4',
      desc: 'Desc tarea 4',
      completed: false,
    },
    {
      id: '5',
      title: 'Tarea 5',
      desc: 'Desc tarea 5',
      completed: false,
    },
    {
      id: '6',
      title: 'Tarea 6',
      desc: 'Desc tarea 6',
      completed: false,
    },
  ],
  resultadoBusqueda: []
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state.tareas, action.payload];
    },
    deleteTask: (state, action) => {
      const confirmar = confirm('¿Quieres eliminar al tarea?')
      if (confirmar) {
        return state.tareas.filter((stateTask) => stateTask.id !== action.payload);
      }
    },
    editTask: (state, action) => {
      const { id, title, desc } = action.payload
      console.log(action.payload.id)
      const taskToEdit = state.tareas.find(stateTask =>
        stateTask.id === id
      )
      if (taskToEdit) {
        taskToEdit.title = title
        taskToEdit.desc = desc
      }
    },
    buscarTask: (state, action) => {
      console.log(action.payload)
      const resultadoBusqueda = state.tareas.filter(tarea => {
        return tarea.title.includes(`${action.payload}`)
      })
      console.log(resultadoBusqueda)
      state.resultadoBusqueda = resultadoBusqueda
    }
  },
});

export const { addTask, deleteTask, editTask, buscarTask } = taskSlice.actions;
export default taskSlice.reducer;
