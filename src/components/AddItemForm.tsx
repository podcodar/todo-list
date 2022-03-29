import React, { useState } from 'react';

function AddItemForm() {
  const domInputId = 'new-todo-input';
  const [captureInput, setCaptureInput] = useState<string>();

  const handleInputText = () => {
    setCaptureInput('');
  };

  return (
    <form onSubmit={handleInputText}>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        value={captureInput}
        id={domInputId}
        className="input input__lg"
        name={domInputId}
        autoComplete="off"
        onChange={(e) => setCaptureInput(e.target.value)}
      />
      <button
        type="button"
        className="btn btn__primary btn__lg"
        onClick={handleInputText}
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
