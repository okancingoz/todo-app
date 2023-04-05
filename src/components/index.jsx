import { useEffect, useState } from "react";
import Form from "./Form/Form.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import Footer from "./Footer/Footer.jsx";
import "./style.css";

function Todos() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterTodo();
    saveLocalTodos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  const filterTodo = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "active":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };
  
  return (
    <section className="todoapp">
      <Form
        todoText={todoText}
        setTodoText={setTodoText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
      <Footer
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
    </section>
  );
}

export default Todos;
