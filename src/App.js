import { useImmer } from "use-immer";
import TaskList from "./TaskList";
import AddTodo from "./AddTodo";

let NextId = 3;
const Initial = [
  { id: 0, title: "Stand", done: true },
  { id: 1, title: "Fight", done: true },
  { id: 2, title: "Conquer", done: false },
];

export default function App() {
  const [todos, setTodos] = useImmer(Initial);

  function handleAddtodo(t) {
    setTodos((draft) => {
      draft.push({ id: NextId++, title: t, done: false });
    });
  }

  function handleChangetodo(n) {
    console.log(n);
    setTodos(
      todos.map((todo) => {
        if (todo.id === n.id) {
          console.log(n.id);
          return n;
        } else {
          console.log(todo);
          return todo;
        }
      })
    );
  }

  function handleDeletetodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  return (
    <div className="App">
      <AddTodo onAddtodo={handleAddtodo} />
      <TaskList
        todos={todos}
        onChangetodo={handleChangetodo}
        onDeletetodo={handleDeletetodo}
      />
    </div>
  );
}
