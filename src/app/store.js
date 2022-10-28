import { configureStore } from '@reduxjs/toolkit';
import notasReducer from '../features/NotaSlice';

export default configureStore({
  reducer: {
    notas: notasReducer,
  },
});
