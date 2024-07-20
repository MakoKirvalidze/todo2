
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskPage from './components/AddTaskPage';
import EditTaskPage from './components/EditTaskPage';
import { fetchTasks, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const tasksData = await fetchTasks();
    setTasks(tasksData);
  };

  const handleUpdateTask = async (id, updates) => {
    await updateTask(id, updates);
    loadTasks();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <Router>
      <div className="App">
        <h1>TODO აპლიკაცია</h1>
        <nav>
          <Link to="/">მთავარი</Link> | <Link to="/add">ახალი დავალების დამატება</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <TaskList 
              tasks={tasks} 
              onUpdateTask={handleUpdateTask}
              onDeleteTask={handleDeleteTask}
            />
          } />
          <Route path="/add" element={<AddTaskPage />} />
          <Route path="/edit/:id" element={<EditTaskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;