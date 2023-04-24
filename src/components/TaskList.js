import React from 'react';
import Task from './Task';

function TaskList(props) {
  const { tasks, onToggleComplete, onDeleteTask, onEditTask } = props;

  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={() => onToggleComplete(task.id)}
          onDeleteTask={() => onDeleteTask(task.id)}
          onEditTask={(newTaskTitle) => onEditTask(task.id, newTaskTitle)}
        />
      ))}
    </div>
  );
}

export default TaskList;


