import React from "react";
import { useState } from "react";

function TodoList({ todos, setTodos, filteredTodos }) {
  const [allCompleted, setAllCompleted] = useState(false);

  const handleToggleAll = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo, completed: !allCompleted };
    });
    setTodos(newTodos);
    setAllCompleted(!allCompleted);
  };
  if (todos.length === 0) return null;
  return (
    <section className="main">
      <input
        className="toggle-all"
        type="checkbox"
        checked={allCompleted}
        onChange={handleToggleAll}
      />
      <label htmlFor="toggle-all" onClick={handleToggleAll}>
        Mark all as {allCompleted ? "active" : "completed"}
      </label>

      <ul className="todo-list">
        {filteredTodos.map((todo) => {
          return (
            <li
              key={todo.id}
              className={`${todo.completed ? "completed" : ""}`}
            >
              <div className="view">
                <input
                  checked={todo.completed}
                  className="toggle"
                  type="checkbox"
                  onChange={() => {
                    setTodos(
                      todos.map((target) => {
                        if (target.id === todo.id) {
                          return { ...target, completed: !target.completed };
                        }
                        return target;
                      })
                    );
                  }}
                />
                <label>{todo.todoText}</label>
                <button
                  className="destroy"
                  onClick={() =>
                    setTodos(todos.filter((target) => target.id !== todo.id))
                  }
                ></button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
