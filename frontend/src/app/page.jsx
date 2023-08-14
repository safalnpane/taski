// page.jsx

import TodoItem from "../components/TodoItem";

const HomePage = () => {
  const todos = [
    {
      name: "Build Nextjs app",
      done: true,
      stared: true,
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
  const important = todos.filter((todo) => todo.stared === true);
  return (
    <main className="container">
      <h1>Taski</h1>
      <div className="todoContainer">
        <h2 style={{ textAlign: "left", margin: "0" }}>Important</h2>
        {important.map((todo) => (
          <TodoItem key={todo.name} todo={todo} />
        ))}
      </div>
      <div className="todoContainer" style={{ marginTop: "20px" }}>
        <h2 style={{ textAlign: "left", margin: "0" }}>Tasks</h2>
        {todos.map((todo) => (
          <TodoItem key={todo.name} todo={todo} />
        ))}
      </div>
    </main>
  );
};

export default HomePage;
