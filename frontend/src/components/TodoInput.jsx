// TodoInput.jsx

import styles from "./todoInput.module.css";

const TodoInput = () => {
  return (
    <div className={styles.todoInput}>
      <input
        className={styles.formField}
        placeholder="what's the next best thing to do?"
        style={{ color: "black" }}
      />
      <a href="#" className={styles.button}>
        Add
      </a>
    </div>
  );
};

export default TodoInput;
