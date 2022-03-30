import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [description, setDescription] = useState([]);
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm setDescription={setDescription} description={description} />
      <TaskDashboard description={description} />
    </div>
  );
}

export default App;
