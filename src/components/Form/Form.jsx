import React from "react";

function Form({ todoText, setTodoText, todos, setTodos }) {
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todoText === "") return;
    setTodos([
      ...todos,
      {
        todoText: todoText,
        completed: false,
        id: Math.floor(Math.random() * 1000000),
      },
    ]);
    setTodoText("");
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={todoText}
          onChange={onChangeTodoText}
        />
      </form>
    </header>
  );
}

export default Form;
