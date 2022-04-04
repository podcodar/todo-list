import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './interface/ITask';

interface AddItemTypeProps {
  taskList: Task[];
  setTaskList: (value: Task[]) => void;
}

function AddItemForm({ taskList, setTaskList }: AddItemTypeProps) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== '') {
      setTaskList([...taskList, { value: inputValue, id: uuidv4() }]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        value={inputValue}
        id="new-todo-input"
        className="input input__lg"
        name="new-todo-input"
        autoComplete="off"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
