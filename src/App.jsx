import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/form" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
