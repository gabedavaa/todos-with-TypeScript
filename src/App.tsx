import { useState } from "react";
import "./App.css";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prev) => prev.concat(newTodo));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
