import React from "react";

function Footer({ todos, setTodos, status, setStatus }) {
  const handleSetStatusAll = () => {
    setStatus("all");
  };
  const handleSetActive = () => {
    setStatus("active");
  };
  const handleSetCompleted = () => {
    setStatus("completed");
  };

  const handleStatus = (statusText) => {
    return `${status === statusText ? "selected" : ""}`;
  };

  const destroyAll = () => {
    setTodos([]);
  };

  let activesLength = 0;

  todos.map((todo) => {
    if (todo.completed === false) {
      activesLength++;
    }
    return activesLength;
  });

  const hiddenBtn = () => {
    const checkAllCompleted = todos.every((todo) => !todo.completed);
    return checkAllCompleted ? "hidden" : "";
  };

  if (todos.length === 0) return null;
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activesLength}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={handleSetStatusAll}
            className={handleStatus("all")}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSetActive}
            className={handleStatus("active")}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={handleSetCompleted}
            className={handleStatus("completed")}
          >
            Completed
          </a>
        </li>
      </ul>

      <button className={`clear-completed ${hiddenBtn()}`} onClick={destroyAll}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
