// page.jsx

import TodoItem from "../components/TodoItem";

const HomePage = () => {
  const todos = [
    {
      name: "Build Nextjs app",
      done: false,
      stared: false,
    },
    {
      name: "Implement backend",
      done: false,
      stared: false,
    },
    {
      name: "Style app",
      done: false,
      stared: false,
    },
    {
      name: "Read vastu book",
      done: false,
      stared: true,
    },
    {
      name: "Explore js ecosystem",
      done: true,
      stared: false,
    },
  ];
  return (
    <main className="container">
      <h1>Taski</h1>
      <div className="todoContainer">
        <h2 style={{ textAlign: "left", margin: "0" }}>Tasks</h2>
        {todos.map((todo) => (
          <TodoItem key={todo.name} todo={todo} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
