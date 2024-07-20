import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { updateTask, fetchTasks } from '../services/api';

function EditTaskPage() {
  const [task, setTask] = useState({ name: '', dueDate: '', assignee: '', additionalInfo: '', isCompleted: false });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      const tasks = await fetchTasks();
      const currentTask = tasks.find(t => t._id === id);
      if (currentTask) {
        setTask(currentTask);
      }
    };
    loadTask();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    navigate('/');
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>დავალების რედაქტირება</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={task.name} onChange={handleChange} placeholder="დავალების სახელი" required />
        <input name="dueDate" type="date" value={task.dueDate} onChange={handleChange} required />
        <input name="assignee" value={task.assignee} onChange={handleChange} placeholder="შემსრულებელი" required />
        <textarea name="additionalInfo" value={task.additionalInfo} onChange={handleChange} placeholder="დამატებითი ინფორმაცია" />
        <button type="submit">განახლება</button>
      </form>
    </div>
  );
}

export default EditTaskPage;