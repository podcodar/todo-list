import React, { useState } from 'react';

interface ListStateType {
  taskList: string[];
  setTaskList: (value: string[]) => void;
}
function AddItemForm({ taskList, setTaskList }: ListStateType) {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputText = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue !== '') {
      setTaskList([...taskList, inputValue]);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleInputText}>
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
