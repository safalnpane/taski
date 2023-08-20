// TodoItem.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faStar,
  faCircleXmark,
} from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck as faCircleCheckFilled,
  faStar as faStarFilled,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./todoItem.module.css";

const TodoItem = ({ todo, handleCheck, handleStared, handleDelete }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <FontAwesomeIcon
          icon={todo.done ? faCircleCheckFilled : faCircleCheck}
          className={styles.icon}
          onClick={() => handleCheck(todo._id)}
        />
        <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.name}
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={todo.stared ? faStarFilled : faStar}
          className={styles.icon + " " + styles.star}
          onClick={() => handleStared(todo._id)}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.icon + " " + styles.delete}
          onClick={() => handleDelete(todo._id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
