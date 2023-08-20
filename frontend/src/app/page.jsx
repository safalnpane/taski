// page.jsx
"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  function handleTodoAdd(task) {
    const newTodo = { name: task, done: false, stared: false };

    axios
      .post("http://localhost:3001", newTodo)
      .then((res) => {
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleCheck(todoId) {
    axios
      .put("http://localhost:3001/check/" + todoId)
      .then((res) => {
        setTodos(
          todos.map((todo) => {
            if (todo._id === todoId) {
              return { ...todo, ...res.data };
            } else {
              return todo;
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleStared(todoId) {
    axios
      .put("http://localhost:3001/star/" + todoId)
      .then((res) => {
        setTodos(
          todos.map((todo) => {
            if (todo._id === todoId) {
              return { ...todo, ...res.data };
            } else {
              return todo;
            }
          })
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function handleDelete(todoId) {
    axios
      .delete("http://localhost:3001/" + todoId)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setTodos(todos.filter((todo) => todo._id != todoId));
  }

  return (
    <main className="container">
      <h1>Taski</h1>
      <TodoList
        title="important"
        todos={todos.filter((todo) => todo.stared === true)}
        emptyMessage="Star your tasks to make them important"
        handleCheck={handleCheck}
        handleStared={handleStared}
        handleDelete={handleDelete}
      />
      <TodoList
        title="Tasks"
        todos={todos}
        emptyMessage="Add your tasks and they will appear here"
        handleCheck={handleCheck}
        handleStared={handleStared}
        handleDelete={handleDelete}
      />
      <TodoInput onClick={handleTodoAdd} />
    </main>
  );
};

export default HomePage;
