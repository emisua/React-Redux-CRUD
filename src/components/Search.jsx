import { useDispatch } from "react-redux"
import { buscarTask } from '../features/tasks/taskSlice';

const Search = () => {
  const dispatch = useDispatch()
  const handleChangeBuscar = (e) => {
    dispatch(buscarTask(e.target.value))
  }
  return (
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Busca una tarea</label>
      <input
      onChange={(e) => handleChangeBuscar(e)}
      type="text"
      id="search"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Busca una tarea" />
    </div>
  )
}

export default Search