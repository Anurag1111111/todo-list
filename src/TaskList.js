import { useState } from "react";

export default function TaskList({ todos, onChangetodo, onDeletetodo }) {
  return (
    <ul className="ul">
      {todos.map((todo) => {
        return (
          <li className="py-3" key={todo.id}>
            <Task todo={todo} onChange={onChangetodo} onDelete={onDeletetodo} />
          </li>
        );
      })}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isediting, setIsediting] = useState(false);
  let todoContent;
  if (isediting) {
    todoContent = (
      <div>
        <input
          className="d-flex flex-row container"
          value={todo.title}
          onChange={(e) => {
            onChange({ ...todo, title: e.target.value });
          }}
        />
        <button
          className="btn btn-success es"
          onClick={() => setIsediting(false)}
        >
          Save
        </button>
      </div>
    );
  } else {
    todoContent = (
      <div className="d-flex flex-column">
        <p className="mb-0"> {todo.title}</p>
        <button
          className="btn btn-warning es"
          onClick={() => setIsediting(true)}
        >
          Edit
        </button>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        <input
          className="d-flex mb-5 mx-2"
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({ ...todo, done: e.target.checked });
          }}
        />

        {todoContent}
      </div>
      <div>
        <button
          className="btn btn-danger mx-4"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
