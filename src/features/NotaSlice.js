import { createSlice } from '@reduxjs/toolkit';

export const notasSlice = createSlice({
  name: 'notas',
  initialState: {
    listaNotas: [],
  },
  reducers: {
    textInput: (state, action) => {
      state.textoNota = action.payload;
    },
    newNote: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.listaNotas = [...state.listaNotas, action.payload];
    },
    deleteNote: (state, action) => {
      //console.log(state, action.payload);
      state.listaNotas = state.listaNotas.filter((note) => {
        note === action.payload;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { newNote, deleteNote } = notasSlice.actions;

export default notasSlice.reducer;
