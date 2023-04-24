import React, { useState } from "react";

function AddTask(props) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim()) {
      props.onAddTask(text);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agrega una tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default AddTask;
