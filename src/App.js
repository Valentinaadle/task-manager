import React, { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleEditTask(id, newText) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, text: newText };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  function handleToggleComplete(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div>
      <h1>Administrador de tareas</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onToggleComplete={handleToggleComplete}
      />
    </div>
  );
}

export default App;
