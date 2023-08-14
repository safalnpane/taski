// page.jsx
"use client";

import { useState } from "react";

import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  const important = todos.filter((todo) => todo.stared === true);
  return (
    <main className="container">
      <h1>Taski</h1>
      <TodoList
        title="important"
        todos={important}
        emptyMessage="Star your tasks to make them important"
      />
      <TodoList
        title="Tasks"
        todos={todos}
        emptyMessage="Add your tasks and they will appear here"
      />
      <TodoInput />
    </main>
  );
};

export default HomePage;
