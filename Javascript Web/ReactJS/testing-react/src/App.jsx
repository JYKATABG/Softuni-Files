import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //Helper functions

  const handleChange = () => {
    if (newTodo === "") return alert("Type a task");

    if (!todos.includes(newTodo)) {
      setTodos((prevTodo) => [newTodo, ...prevTodo]);
      setNewTodo("");
    } else {
      alert("This task already exists");
    }
  };

  const deleteTask = (listTodo) => {
    setTodos((todo) => todo.filter((x) => x === listTodo));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-data">
          <input
            type="text"
            placeholder="your task..."
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={handleChange}>Add Todo</button>
        </div>
        <div className="all-todos">
          <ul>
            {todos.length === 0 && <h1>The list is empty :(</h1>}

            {todos.map((todo) => {
              return (
                <div className="single-todo">
                  <li key={Math.random() * 10}>{todo}</li>
                  <button onClick={() => deleteTask(todo)}>X</button>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
