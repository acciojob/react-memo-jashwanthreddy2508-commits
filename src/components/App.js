import React, { useState, useEffect, useMemo } from "react";
import UseMemo from "./UseMemo";
import TodoList from "./ReactMemo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [task, setTask] = useState("");

  // Add default todo
  function addTodo() {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  }

  // Add custom task
  function handleSubmit() {
    if (task.trim().length > 5) {
      setTodos((prevTodos) => [...prevTodos, task.trim()]);
      setTask("");
    } else {
      alert("Task must contain more than 5 characters");
    }
  }

  // useEffect example
  useEffect(() => {
    console.log("Todos updated:", todos);
  }, [todos]);

  // useMemo example
  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo and Counter App</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment
      </button>

      <hr />

      <h2>Todos</h2>

      <button onClick={addTodo}>Add Todo</button>

      <div>
        <input
          type="text"
          placeholder="Enter a custom task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <h3>Total Todos: {totalTodos}</h3>

      <UseMemo todos={todos} />

      <TodoList todos={todos} />
    </div>
  );
}

export default App;


