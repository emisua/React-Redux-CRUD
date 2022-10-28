import Nota from './components/Nota';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newNote } from './features/NotaSlice';

function App() {
  const notas = useSelector((state) => state.notas.listaNotas);
  console.log(notas);
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newNote(text));
    setText('');
  };

  return (
    <div className="App">
      <h1>App de tareas para probar REDUX</h1>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {console.log(text)}
        <button onClick={(e) => handleSubmit(e)}>Guardar Nota</button>
      </form>
      <div className="listaNotas">
        <h3>Lista de notas</h3>
        {notas.map((nota) => (
          <Nota nota={nota} key={nota} />
        ))}
      </div>
    </div>
  );
}

export default App;
