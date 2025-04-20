import React from 'react';

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;