import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../services/api';

function AddTaskPage() {
  const [task, setTask] = useState({ name: '', dueDate: '', assignee: '', additionalInfo: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTask(task);
    navigate('/');
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>ახალი დავალების დამატება</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={task.name} onChange={handleChange} placeholder="დავალების სახელი" required />
        <input name="dueDate" type="date" value={task.dueDate} onChange={handleChange} required />
        <input name="assignee" value={task.assignee} onChange={handleChange} placeholder="შემსრულებელი" required />
        <textarea name="additionalInfo" value={task.additionalInfo} onChange={handleChange} placeholder="დამატებითი ინფორმაცია" />
        <button type="submit">დამატება</button>
      </form>
    </div>
  );
}

export default AddTaskPage;