import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'Tarea 1',
    desc: 'Desc tarea 1',
    completed: false,
  },
  {
    id: '2',
    title: 'Tarea 2',
    desc: 'Desc tarea 2',
    completed: false,
  },
];

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    deleteTask: (state, action) => {
      return state.filter((stateTask) => stateTask.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
