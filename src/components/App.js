import React, { useState } from 'react';
import TaskList from './TaskList';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';

function App() {
  console.log("Here's the data you're working with");
  console.log({
    CATEGORIES: ['All', 'Code', 'Food', 'Money', 'Misc'],
    TASKS: [
      { text: 'Buy rice', category: 'Food' },
      { text: 'Save a tenner', category: 'Money' },
      { text: 'Build a todo app', category: 'Code' },
      { text: 'Build todo API', category: 'Code' },
      { text: 'Get an ISA', category: 'Money' },
      { text: 'Cook rice', category: 'Food' },
      { text: 'Tidy house', category: 'Misc' }
    ]
  });

  // Initial data
  const CATEGORIES = ['All', 'Code', 'Food', 'Money', 'Misc'];
  const TASKS = [
    { text: 'Buy rice', category: 'Food' },
    { text: 'Save a tenner', category: 'Money' },
    { text: 'Build a todo app', category: 'Code' },
    { text: 'Build todo API', category: 'Code' },
    { text: 'Get an ISA', category: 'Money' },
    { text: 'Cook rice', category: 'Food' },
    { text: 'Tidy house', category: 'Misc' }
  ];

  // State
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter tasks based on selected category
  const filteredTasks = selectedCategory === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory);

  // Delete task handler
  const handleDeleteTask = (taskText) => {
    setTasks(tasks.filter(task => task.text !== taskText));
  };

  // Add new task handler
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <CategoryFilter 
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES.filter(cat => cat !== 'All')}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;