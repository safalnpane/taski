// TodoList.jsx

import TodoItem from "./TodoItem";

const TodoList = ({
  title,
  todos,
  emptyMessage,
  handleCheck,
  handleStared,
  handleDelete,
}) => {
  return (
    <div className="todoContainer">
      <h2 style={{ textAlign: "left", margin: "0" }}>{title}</h2>
      {todos.length === 0 ? (
        <p
          style={{
            color: "rgba(0,0,0,0.7)",
            textAlign: "left",
            margin: "10px",
          }}
        >
          {emptyMessage}
        </p>
      ) : null}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          handleStared={handleStared}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TodoList;
