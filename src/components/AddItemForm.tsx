import React, { useState } from 'react';

interface IProps {
  handleAdd: (textTask: string) => void;
}

function AddItemForm({ handleAdd }: IProps) {
  const domInputId = 'new-todo-input';
  const [taskText, setTaskText] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setTaskText(event.target.value);
  };

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id={domInputId}
        className="input input__lg"
        name={domInputId}
        onChange={handleChange}
        autoComplete="off"
      />
      <button
        type="button"
        onClick={() => handleAdd(taskText)}
        className="btn btn__primary btn__lg"
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
