import React, { useState } from "react";
import "./index.css";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask.trim()]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleMoveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [
        updatedTasks[index - 1],
        updatedTasks[index]
      ] = [
        updatedTasks[index],
        updatedTasks[index - 1]
      ];
      setTasks(updatedTasks);
    }
  };

  const handleMoveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [
        updatedTasks[index + 1],
        updatedTasks[index]
      ] = [
        updatedTasks[index],
        updatedTasks[index + 1]
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <div className="todo-container">
      <h1>ToDo List</h1>
      <ol>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="delete-button"
            >
              Delete Task
            </button>
            <button
              onClick={() => handleMoveTaskUp(index)}
              className="move-button"
            >
              Move Up
            </button>
            <button
              onClick={() => handleMoveTaskDown(index)}
              className="move-button"
            >
              Move Down
            </button>
          </li>
        ))}
      </ol>
      <div className="input-group">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task"
          onChange={handleTaskChange}
          className="task-input"
        />
        <button onClick={handleAddTask} className="add-button">
          Add Task
        </button>
      </div>
    </div>
  );
}
