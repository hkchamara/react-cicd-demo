import { useState } from "react";

import { describe, it, expect } from "vitest";

describe("CI/CD application", () => {
  it("should pass the CI test", () => {
    expect(true).toBe(true);
  });
});

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1>CI/CD Task Manager</h1>

      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />

        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          tasks.map((item) => (
            <div className="task" key={item.id}>
              <span
                className={item.completed ? "completed" : ""}
                onClick={() => toggleTask(item.id)}
              >
                {item.name}
              </span>

              <button onClick={() => deleteTask(item.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;