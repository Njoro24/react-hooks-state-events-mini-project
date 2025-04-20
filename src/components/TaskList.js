import React from 'react';
import Task from './Task';

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task 
          key={index}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;