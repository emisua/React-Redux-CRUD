import { useSelector } from 'react-redux';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
  const taskState = useSelector((state) => state.tasks);
  console.log(taskState);
  return (
    <div className="App">
      <h1>CRUD REDUX</h1>
      <TaskList />
      <TaskForm />
    </div>
  );
}

export default App;
