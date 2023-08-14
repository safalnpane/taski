// page.jsx
"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  function handleTodoAdd(task) {
    setTodos([
      ...todos,
      { id: uuid(), name: task, done: false, stared: false },
    ]);
  }

  function handleCheck(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      })
    );
  }

  function handleStared(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, stared: !todo.stared };
        } else {
          return todo;
        }
      })
    );
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
      />
      <TodoList
        title="Tasks"
        todos={todos}
        emptyMessage="Add your tasks and they will appear here"
        handleCheck={handleCheck}
        handleStared={handleStared}
      />
      <TodoInput onClick={handleTodoAdd} />
    </main>
  );
};

export default HomePage;
