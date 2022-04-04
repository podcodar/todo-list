import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { Task } from './components/interface/ITask';

function App() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  return (
    <div className="todoapp stack-large">
      <Title />
      <AddItemForm setTaskList={setTaskList} taskList={taskList} />
      <TaskDashboard taskList={taskList} />
    </div>
  );
}

export default App;
