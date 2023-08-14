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

const TodoItem = ({ todo, handleCheck, handleStared }) => {
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoText}>
        <FontAwesomeIcon
          icon={todo.done ? faCircleCheckFilled : faCircleCheck}
          className={styles.icon}
          onClick={() => handleCheck(todo.id)}
        />
        <p style={{ textDecoration: todo.done ? "line-through" : "none" }}>
          {todo.name}
        </p>
      </div>
      <div>
        <FontAwesomeIcon
          icon={todo.stared ? faStarFilled : faStar}
          className={styles.icon + " " + styles.star}
          onClick={() => handleStared(todo.id)}
        />
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={styles.icon + " " + styles.delete}
        />
      </div>
    </div>
  );
};

export default TodoItem;
