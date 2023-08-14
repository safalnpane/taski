// TodoInput.jsx
"use client";

import { useState } from "react";
import styles from "./todoInput.module.css";

const TodoInput = ({ onClick }) => {
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function handleSubmit() {
    if (newTask === "") {
      return;
    }
    onClick(newTask);
    setNewTask("");
  }

  return (
    <div className={styles.todoInput}>
      <input
        className={styles.formField}
        placeholder="what's the next best thing to do?"
        value={newTask}
        style={{ color: "black" }}
        onChange={handleInputChange}
      />
      <a href="#" className={styles.button} onClick={handleSubmit}>
        Add
      </a>
    </div>
  );
};

export default TodoInput;
