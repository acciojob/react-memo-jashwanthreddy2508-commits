import React from "react";

const TodoList = React.memo(function TodoList({ todos }) {
  console.log("TodoList rendered");

  return (
    <div>
      <h3>Todo List</h3>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
});

export default TodoList;
