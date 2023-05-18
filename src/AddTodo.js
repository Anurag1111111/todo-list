import { useState } from "react";

export default function AddTodo({ onAddtodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="container py-5">
      <input
        className="w-50"
        placeholder="Add Todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        className="btn text-secondary bg-secondary text-white mx-1"
        onClick={() => {
          setTitle("");
          onAddtodo(title);
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
