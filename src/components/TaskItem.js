
import React from 'react';
import { Link } from 'react-router-dom';

function TaskItem({ task, onUpdateTask, onDeleteTask }) {
  return (
    <li>
      <span className={task.isCompleted ? 'completed' : ''}>
        {task.name} - ვადა: {task.dueDate}, შემსრულებელი: {task.assignee}
      </span>
      <button onClick={() => onUpdateTask(task._id, { isCompleted: !task.isCompleted })}>
        {task.isCompleted ? 'გაუქმება' : 'დასრულება'}
      </button>
      <Link to={`/edit/${task._id}`}>
        <button>რედაქტირება</button>
      </Link>
      <button onClick={() => onDeleteTask(task._id)}>წაშლა</button>
    </li>
  );
}

export default TaskItem;