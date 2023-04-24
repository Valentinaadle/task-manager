import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEdit, FaTrash } from "react-icons/fa";

const Task = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  const [editable, setEditable] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  const handleEditable = () => {
    setEditable(!editable);
  };

  const handleEditedText = (event) => {
    setEditedText(event.target.value);
  };

  const handleEditTask = () => {
    onEditTask(editedText);
    setEditable(false);
  };

  const renderEditableTask = () => {
    return (
      <div className="task">
        <input type="text" value={editedText} onChange={handleEditedText} />
        <button className="task-button" onClick={handleEditTask}>
          Guardar
        </button>
      </div>
    );
  };

  const renderTask = () => {
    return (
      <div className="task">
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
          />
          <span className={task.completed ? "completed" : ""}>{task.text}</span>
        </div>
        <div>
          <button className="task-button" onClick={handleEditable}>
            <FaEdit />
          </button>
          <button className="task-button" onClick={handleDeleteTask}>
            <FaTrash />
          </button>
        </div>
      </div>
    );
  };

  return editable ? renderEditableTask() : renderTask();
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }),
  onToggleComplete: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

export default Task;
