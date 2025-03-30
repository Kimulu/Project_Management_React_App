import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const [error, setError] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
    setError(""); // Clear error when user starts typing
  }

  function handleClick() {
    if (enteredTask.trim().length < 1) {
      setError("Please enter a valid task!"); // Set error message
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
    setError(""); // Clear error after successful add
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {/* Display error message */}
    </div>
  );
}
