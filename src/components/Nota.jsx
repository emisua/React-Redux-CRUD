import { deleteNote } from '../features/NotaSlice';
import { useDispatch } from 'react-redux';

const Nota = ({ nota }) => {
  const dispatch = useDispatch();
  return (
    <>
      <p>{nota}</p>
      <button onClick={() => dispatch(deleteNote(nota))}>Borrar</button>
    </>
  );
};

export default Nota;
