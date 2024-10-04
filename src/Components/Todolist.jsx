import React, { useState } from 'react';
import './Todolist.css';

const Todolist = () => {
  const [items, setItems] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = (task) => {
    if (taskInput.trim() === '') return;
    setItems([...items, taskInput]);
  };

  const removeTask = (index) => {
    const updatedItems = items.filter((item, itemIndex) => itemIndex !== index);
    setItems(updatedItems);
  }

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input type="text" id="taskInput" placeholder="Enter a new task" value={taskInput} onChange={(e) => setTaskInput(e.target.value)} />
        <button id="addTaskBtn" onClick={() => addTask(taskInput)}>Add Task</button>
      </div>
      <ul id="taskList">
        {items.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
            <button onClick={() => removeTask(index)}>Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;