// TodoItem.jsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleCheck as faCircleCheckFilled,
  faStar as faStarFilled,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./todoItem.module.css";

const TodoItem = ({ todo }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <FontAwesomeIcon
          icon={todo.done ? faCircleCheckFilled : faCircleCheck}
          className={styles.icon}
        />
        <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.name}
        </p>
      </div>
      <FontAwesomeIcon
        icon={todo.stared ? faStarFilled : faStar}
        className={styles.icon + " " + styles.star}
      />
    </div>
  );
};

export default TodoItem;
